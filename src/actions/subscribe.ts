"use server";

import { z } from "zod";
import { getResend } from "@/lib/resend";
import { welcomeEmail } from "@/lib/email-templates";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function subscribeAction(
  _prevState: { success: boolean; message: string },
  formData: FormData
) {
  const parsed = schema.safeParse({ email: formData.get("email") });

  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0].message };
  }

  const { email } = parsed.data;

  try {
    const resend = getResend();

    if (resend) {
      const audienceId = process.env.RESEND_AUDIENCE_ID;
      if (audienceId) {
        await resend.contacts.create({ email, audienceId });
      }

      if (process.env.RESEND_FROM_EMAIL) {
        const template = welcomeEmail();
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: email,
          subject: template.subject,
          html: template.html,
        });
      }
    }

    return {
      success: true,
      message:
        "You're in. Welcome to the club — check your inbox for a welcome note.",
    };
  } catch (error) {
    console.error("Subscribe error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
