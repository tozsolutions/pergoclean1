import { NextResponse } from "next/server";
import { postWebhook } from "@/lib/utils";
import { checkRateLimit, sanitizePayload, checkHoneypot, logRequest, baseFormSchema } from "@/lib/api-security";
import { z } from "zod";

const photoSchema = baseFormSchema.extend({
  detay: z.string().optional()
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

    const parsedBody = photoSchema.safeParse(rawBody);
    if (!parsedBody.success) {
      const errorMessage = parsedBody.error.issues.map(e => e.message).join(", ");
      return NextResponse.json({ message: errorMessage }, { status: 400 });
    }

    const cleanBody = sanitizePayload(parsedBody.data);

    const payload = {
      source: "pergoclean-web",
      type: "photo",
      createdAt: new Date().toISOString(),
      data: cleanBody
    };

    logRequest("/api/lead/photo", cleanBody, ip);

    await postWebhook(process.env.PHOTO_WEBHOOK_URL, payload);

    return NextResponse.json({
      success: true,
      message: "Fotoğraf ön talebiniz kaydedildi.",
      payload
    });
  } catch (error) {
    console.error("Photo API Error:", error);
    return NextResponse.json(
      { message: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
