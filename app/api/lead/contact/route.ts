import { NextResponse } from "next/server";
import { postWebhook } from "@/lib/utils";
import { checkRateLimit, sanitizePayload, checkHoneypot, logRequest, baseFormSchema } from "@/lib/api-security";
import { z } from "zod";

const contactSchema = baseFormSchema.extend({
  konu: z.string().min(1, "Konu alanı zorunludur."),
  mesaj: z.string().min(5, "Mesaj en az 5 karakter olmalıdır.")
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

    const parsedBody = contactSchema.safeParse(rawBody);
    if (!parsedBody.success) {
      const errorMessage = parsedBody.error.issues.map(e => e.message).join(", ");
      return NextResponse.json({ message: errorMessage }, { status: 400 });
    }

    const cleanBody = sanitizePayload(parsedBody.data);

    const payload = {
      source: "pergoclean-web",
      type: "contact",
      createdAt: new Date().toISOString(),
      data: cleanBody
    };

    logRequest("/api/lead/contact", cleanBody, ip);

    await postWebhook(process.env.CONTACT_WEBHOOK_URL, payload);

    return NextResponse.json({
      success: true,
      message: "Mesajınız kaydedildi.",
      payload
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { message: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
