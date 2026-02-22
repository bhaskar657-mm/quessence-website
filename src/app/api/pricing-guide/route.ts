import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const supabase = getSupabase();
    const { error: dbError } = await supabase
      .from("pricing_guide_downloads")
      .insert({ name: name.trim(), email: email.trim() });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to process your request. Please try again." },
        { status: 500 }
      );
    }

    // Send email notification (best-effort)
    try {
      const resendKey = process.env.RESEND_API_KEY;
      const notifyEmail = process.env.NOTIFICATION_EMAIL || "desk.quessence@gmail.com";

      if (resendKey) {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: "Quessence Website <onboarding@resend.dev>",
          to: notifyEmail,
          subject: `Pricing Guide Download: ${name.trim()}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff; border-radius: 12px;">
              <h2 style="color: #111827; margin: 0 0 24px 0; font-size: 20px;">New Pricing Guide Download</h2>
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 16px 0;">Someone downloaded the Content Marketing pricing guide from your website.</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; width: 120px;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: 500;">${name.trim()}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">Email</td>
                  <td style="padding: 12px 0; color: #111827; font-size: 14px; font-weight: 500;">
                    <a href="mailto:${email.trim()}" style="color: #3B6BF5; text-decoration: none;">${email.trim()}</a>
                  </td>
                </tr>
              </table>
              <p style="margin: 24px 0 0 0; color: #9ca3af; font-size: 12px;">Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
            </div>
          `,
        });
      }
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
      // Don't fail the request — submission is already saved
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
