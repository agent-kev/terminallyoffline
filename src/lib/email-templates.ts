const BRAND = {
  green: "#0E7566",
  dark: "#1A1A1A",
  cream: "#F0EDE8",
  grey: "#666",
  lightGrey: "#999",
  url: "https://terminallyoffline.club",
};

function layout(content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:${BRAND.cream};font-family:system-ui,-apple-system,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:48px 24px;">
    <!-- Logo -->
    <div style="text-align:center;margin-bottom:40px;">
      <div style="display:inline-block;width:48px;height:48px;background:linear-gradient(135deg,#2D6A4F,#1B998B);border-radius:12px;line-height:48px;text-align:center;">
        <span style="color:white;font-weight:700;font-size:20px;">TO</span>
      </div>
    </div>

    <!-- Content card -->
    <div style="background:white;border-radius:16px;padding:40px 32px;border:1px solid rgba(0,0,0,0.06);">
      ${content}
    </div>

    <!-- Footer -->
    <div style="text-align:center;margin-top:32px;padding:0 16px;">
      <p style="color:${BRAND.lightGrey};font-size:12px;line-height:1.6;margin:0;">
        Terminally Offline Club &middot; Aotearoa, New Zealand<br/>
        <a href="${BRAND.url}" style="color:${BRAND.green};text-decoration:none;">terminallyoffline.club</a>
      </p>
      <p style="color:#ccc;font-size:11px;margin-top:16px;font-family:monospace;letter-spacing:1px;">
        BUILT OFFLINE, OBVIOUSLY.
      </p>
    </div>
  </div>
</body>
</html>`;
}

export function welcomeEmail() {
  return {
    subject: "Welcome to the Terminally Offline Club",
    html: layout(`
      <h1 style="font-size:24px;color:${BRAND.dark};margin:0 0 8px 0;font-weight:700;">
        Welcome to the club.
      </h1>
      <p style="color:${BRAND.green};font-size:13px;font-family:monospace;letter-spacing:2px;margin:0 0 24px 0;text-transform:uppercase;">
        You're in.
      </p>

      <p style="color:${BRAND.grey};line-height:1.7;margin:0 0 20px 0;font-size:15px;">
        You've taken the first step toward reclaiming your attention. The 30-Day Offline Challenge
        launches with <strong>Offline October 2026</strong> — and you'll be among the first to start.
      </p>

      <p style="color:${BRAND.grey};line-height:1.7;margin:0 0 24px 0;font-size:15px;">
        Here's what happens next:
      </p>

      <div style="margin:0 0 24px 0;">
        <div style="display:flex;margin-bottom:16px;">
          <div style="color:${BRAND.green};font-weight:700;font-size:14px;font-family:monospace;min-width:24px;">1.</div>
          <div style="color:${BRAND.grey};font-size:14px;line-height:1.6;">
            <strong style="color:${BRAND.dark};">We'll send you the rules.</strong>
            Four simple guidelines for your 30 days offline — nothing extreme, just intentional.
          </div>
        </div>
        <div style="display:flex;margin-bottom:16px;">
          <div style="color:${BRAND.green};font-weight:700;font-size:14px;font-family:monospace;min-width:24px;">2.</div>
          <div style="color:${BRAND.grey};font-size:14px;line-height:1.6;">
            <strong style="color:${BRAND.dark};">You'll get a prep guide.</strong>
            A week before launch, we'll share practical tips for setting yourself up to succeed.
          </div>
        </div>
        <div style="display:flex;margin-bottom:16px;">
          <div style="color:${BRAND.green};font-weight:700;font-size:14px;font-family:monospace;min-width:24px;">3.</div>
          <div style="color:${BRAND.grey};font-size:14px;line-height:1.6;">
            <strong style="color:${BRAND.dark};">October 1st, we go offline.</strong>
            Together. No social media, phone in the drawer by 9pm, present at meals, screen-free five days a week.
          </div>
        </div>
      </div>

      <div style="background:${BRAND.cream};border-radius:12px;padding:20px 24px;margin:0 0 24px 0;">
        <p style="color:${BRAND.dark};font-size:14px;line-height:1.6;margin:0;font-style:italic;">
          "The most radical thing you can do in 2026 is put your phone down."
        </p>
      </div>

      <p style="color:${BRAND.grey};line-height:1.7;margin:0 0 24px 0;font-size:15px;">
        In the meantime, here's a small challenge: put your phone in another room for one hour today.
        No checking. See what happens. Consider it practice.
      </p>

      <!-- CTA -->
      <div style="text-align:center;margin:32px 0 8px 0;">
        <a href="${BRAND.url}/challenge" style="display:inline-block;background:${BRAND.green};color:white;padding:14px 32px;border-radius:999px;text-decoration:none;font-weight:600;font-size:15px;">
          Read the Challenge Rules
        </a>
      </div>

      <p style="color:${BRAND.lightGrey};font-size:13px;text-align:center;margin-top:24px;">
        See you on the other side.<br/>
        — The Terminally Offline Club
      </p>
    `),
  };
}

export function contactConfirmationEmail(name: string) {
  return {
    subject: "We received your enquiry — Terminally Offline",
    html: layout(`
      <h1 style="font-size:24px;color:${BRAND.dark};margin:0 0 24px 0;font-weight:700;">
        Thanks, ${name}.
      </h1>
      <p style="color:${BRAND.grey};line-height:1.7;margin:0 0 20px 0;font-size:15px;">
        We've received your enquiry about the Offline for Teams programme. We'll review your message
        and get back to you within 2 business days.
      </p>
      <p style="color:${BRAND.grey};line-height:1.7;margin:0 0 20px 0;font-size:15px;">
        In the meantime, feel free to explore the challenge that started it all:
      </p>
      <div style="text-align:center;margin:32px 0 8px 0;">
        <a href="${BRAND.url}/teams" style="display:inline-block;background:${BRAND.green};color:white;padding:14px 32px;border-radius:999px;text-decoration:none;font-weight:600;font-size:15px;">
          View the Programme
        </a>
      </div>
      <p style="color:${BRAND.lightGrey};font-size:13px;text-align:center;margin-top:24px;">
        — The Terminally Offline Club
      </p>
    `),
  };
}
