import { createOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Terminally Offline Journal";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOGImage({
    title: "Journal",
    subtitle: "Dispatches from the offline world. Essays on digital wellness, boredom, and what happens when you put your phone down.",
    label: "Journal",
  });
}
