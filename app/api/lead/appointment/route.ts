import { NextResponse } from "next/server";
import { postWebhook } from "@/lib/utils";
import { checkRateLimit, sanitizePayload, checkHoneypot, logRequest, baseFormSchema } from "@/lib/api-security";
import { z } from "zod";

const appointmentSchema = baseFormSchema.extend({
  tarih: z.string().min(1, "Tarih alanı zorunludur."),
  saat: z.string().min(1, "Saat alanı zorunludur."),
  adres: z.string().optional()
});

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ message: "Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin." }, { status: 429 });
  }

  try {
    const rawBody = await request.json();

    if (!checkHoneypot(rawBody)) {
      return NextResponse.json({ success: true, message: "Talebiniz alındı." }, { status: 200 });
    }

    const parsedBody = appointmentSchema.safeParse(rawBody);
    if (!parsedBody.success) {
      const errorMessage = parsedBody.error.issues.map(e => e.message).join(", ");
      return NextResponse.json({ message: errorMessage }, { status: 400 });
    }

    const cleanBody = sanitizePayload(parsedBody.data);

    const payload = {
      source: "pergoclean-web",
      type: "appointment",
      createdAt: new Date().toISOString(),
      data: cleanBody
    };

    logRequest("/api/lead/appointment", cleanBody, ip);

    await postWebhook(process.env.APPOINTMENT_WEBHOOK_URL, payload);

    return NextResponse.json({
      success: true,
      message: "Randevu talebiniz kaydedildi.",
      payload
    });
  } catch (error) {
    console.error("Appointment API Error:", error);
    return NextResponse.json(
      { message: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
