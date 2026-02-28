import { createOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Offline for Teams";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOGImage({
    title: "Offline for Teams",
    subtitle: "A structured digital wellness programme for organisations. Six weeks to measurable results.",
    label: "Teams",
  });
}
