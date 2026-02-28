import { createOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "The Offline Passport";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOGImage({
    title: "The Offline Passport",
    subtitle: "Your cryptographically verified proof of disconnection. Soulbound NFT on Base.",
    label: "Passport",
  });
}
