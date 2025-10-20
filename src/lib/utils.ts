import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CALENDLY_URL =
  "https://calendly.com/zdf6300/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=000000&primary_color=00bc7c";
