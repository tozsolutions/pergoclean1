import { NextResponse } from "next/server";
import { postWebhook } from "@/lib/utils";
import { checkRateLimit, sanitizePayload, checkHoneypot, logRequest, baseFormSchema } from "@/lib/api-security";
import { z } from "zod";

const quoteSchema = baseFormSchema.extend({
  sistemTipi: z.string().min(1, "Sistem tipi seçilmelidir."),
  paketTipi: z.string().optional(),
  metrekare: z.union([z.string(), z.number()]).optional(),
  hesaplananFiyat: z.string().optional()
});

export async function POST(request: Request) {
  // Get IP for rate limiting (fallback to unknown)
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ message: "Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin." }, { status: 429 });
  }

  try {
    const rawBody = await request.json();

    // Honeypot check
    if (!checkHoneypot(rawBody)) {
      // Return 200 to fool bots
      return NextResponse.json({ success: true, message: "Talebiniz alındı." }, { status: 200 });
    }

    // Zod validation
    const parsedBody = quoteSchema.safeParse(rawBody);
    if (!parsedBody.success) {
      const errorMessage = parsedBody.error.issues.map(e => e.message).join(", ");
      return NextResponse.json({ message: errorMessage }, { status: 400 });
    }

    // Sanitization
    const cleanBody = sanitizePayload(parsedBody.data);

    const payload = {
      source: "pergoclean-web",
      type: "quote",
      createdAt: new Date().toISOString(),
      data: cleanBody
    };

    // Logging
    logRequest("/api/lead/quote", cleanBody, ip);

    await postWebhook(process.env.QUOTE_WEBHOOK_URL, payload);

    return NextResponse.json({
      success: true,
      message: "Teklif talebiniz kaydedildi.",
      payload
    });
  } catch (error) {
    console.error("Quote API Error:", error);
    return NextResponse.json(
      { message: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
