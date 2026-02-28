import { NextResponse } from "next/server";
import { z } from "zod";
import { getResend } from "@/lib/resend";
import { contactConfirmationEmail } from "@/lib/email-templates";

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const schema = z.object({
  name: z.string().min(1),
  company: z.string().min(1),
  email: z.string().email(),
  teamSize: z.string().min(1),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const { name, company, email, teamSize, message } = parsed.data;
    const resend = getResend();

    if (resend && process.env.RESEND_FROM_EMAIL) {
      // Notify ourselves
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: process.env.RESEND_FROM_EMAIL,
        replyTo: email,
        subject: `Teams Enquiry: ${escapeHtml(company)} (${escapeHtml(teamSize)} people)`,
        html: `
          <h2>New Teams Enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Team Size:</strong> ${escapeHtml(teamSize)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message)}</p>
        `,
      });

      // Send confirmation to the submitter
      const confirmation = contactConfirmationEmail(escapeHtml(name));
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: email,
        subject: confirmation.subject,
        html: confirmation.html,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
