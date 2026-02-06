import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    // Initialize clients inside the function (runtime only)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Save to Supabase database
    const { data, error: dbError } = await supabase
      .from("contacts")
      .insert([
        {
          name,
          email,
          phone: phone || null,
          subject: subject || null,
          message,
        },
      ])
      .select();

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: `Database error: ${dbError.message}` },
        { status: 500 }
      );
    }

    // Send email notification using Resend
    try {
      await resend.emails.send({
        from: "Culture OS <onboarding@resend.dev>", // Update with your verified domain
        to: process.env.NOTIFICATION_EMAIL!, // Your email to receive notifications
        subject: `New Contact Form: ${subject || "No Subject"}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background: #000000; padding: 40px 40px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: 1px;">New Message Received</h1>
                        <p style="margin: 10px 0 0; color: rgba(255,255,255,0.7); font-size: 14px;">Culture OS Contact Form</p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px;">
                        
                        <!-- Info Cards -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 16px 20px; background-color: #fafafa; border-radius: 12px; margin-bottom: 12px;">
                              <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888888; font-weight: 600;">Name</p>
                              <p style="margin: 0; font-size: 16px; color: #000000; font-weight: 500;">${name}</p>
                            </td>
                          </tr>
                          <tr><td style="height: 12px;"></td></tr>
                          <tr>
                            <td style="padding: 16px 20px; background-color: #fafafa; border-radius: 12px;">
                              <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888888; font-weight: 600;">Email</p>
                              <p style="margin: 0; font-size: 16px; color: #000000; font-weight: 500;">
                                <a href="mailto:${email}" style="color: #000000; text-decoration: underline;">${email}</a>
                              </p>
                            </td>
                          </tr>
                          <tr><td style="height: 12px;"></td></tr>
                          <tr>
                            <td style="padding: 16px 20px; background-color: #fafafa; border-radius: 12px;">
                              <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888888; font-weight: 600;">Phone</p>
                              <p style="margin: 0; font-size: 16px; color: #000000; font-weight: 500;">${phone || "Not provided"}</p>
                            </td>
                          </tr>
                          <tr><td style="height: 12px;"></td></tr>
                          <tr>
                            <td style="padding: 16px 20px; background-color: #fafafa; border-radius: 12px;">
                              <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888888; font-weight: 600;">Subject</p>
                              <p style="margin: 0; font-size: 16px; color: #000000; font-weight: 500;">${subject || "Not provided"}</p>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- Message Box -->
                        <div style="margin-top: 24px;">
                          <p style="margin: 0 0 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888888; font-weight: 600;">Message</p>
                          <div style="padding: 20px; background-color: #fafafa; border-radius: 12px; border-left: 4px solid #000000;">
                            <p style="margin: 0; font-size: 15px; color: #333333; line-height: 1.6;">${message}</p>
                          </div>
                        </div>
                        
                        <!-- Reply Button -->
                        <div style="margin-top: 32px; text-align: center;">
                          <a href="mailto:${email}" style="display: inline-block; padding: 14px 32px; background-color: #000000; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;">Reply to ${name}</a>
                        </div>
                        
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 24px 40px; background-color: #fafafa; text-align: center; border-top: 1px solid #eeeeee;">
                        <p style="margin: 0; font-size: 13px; color: #888888;">This message was sent from your Culture OS website contact form.</p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      });
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error("Email error:", emailError);
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
