import { NextResponse } from "next/server";
import { z } from "zod";
import { getResend } from "@/lib/resend";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const { email } = parsed.data;
    const resend = getResend();

    if (resend) {
      const audienceId = process.env.RESEND_AUDIENCE_ID;
      if (audienceId) {
        await resend.contacts.create({ email, audienceId });
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
