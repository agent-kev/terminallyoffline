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
        Terminally Offline &middot; Aotearoa, New Zealand<br/>
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
    subject: "Welcome to Terminally Offline",
    html: layout(`
      <h1 style="font-size:24px;color:${BRAND.dark};margin:0 0 8px 0;font-weight:700;">
        Thanks for subscribing.
      </h1>
      <p style="color:${BRAND.green};font-size:13px;font-family:monospace;letter-spacing:2px;margin:0 0 24px 0;text-transform:uppercase;">
        You're in.
      </p>

      <p style="color:${BRAND.grey};line-height:1.7;margin:0 0 20px 0;font-size:15px;">
        We'll send you the occasional email — new journal articles, ideas for disconnecting, and honest reflections on what it's like to build a website that asks people to stop looking at websites.
      </p>

      <p style="color:${BRAND.grey};line-height:1.7;margin:0 0 24px 0;font-size:15px;">
        In the meantime, here's a small idea: put your phone in another room for one hour today. No checking. See what happens.
      </p>

      <div style="background:${BRAND.cream};border-radius:12px;padding:20px 24px;margin:0 0 24px 0;">
        <p style="color:${BRAND.dark};font-size:14px;line-height:1.6;margin:0;font-style:italic;">
          "The most radical thing you can do in 2026 is put your phone down."
        </p>
      </div>

      <!-- CTA -->
      <div style="text-align:center;margin:32px 0 8px 0;">
        <a href="${BRAND.url}/disconnect" style="display:inline-block;background:${BRAND.green};color:white;padding:14px 32px;border-radius:999px;text-decoration:none;font-weight:600;font-size:15px;">
          Ideas for Disconnecting
        </a>
      </div>

      <p style="color:${BRAND.lightGrey};font-size:13px;text-align:center;margin-top:24px;">
        See you on the other side.<br/>
        — Terminally Offline
      </p>
    `),
  };
}
