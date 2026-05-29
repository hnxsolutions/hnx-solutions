"use client";

import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "919896324736";
const WHATSAPP_MESSAGE = "Hi HNX Solutions, I want to discuss a project.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const hiddenPrefixes = ["/admin", "/dashboard", "/login"];

export default function WhatsAppFloatingButton() {
  const pathname = usePathname() ?? "";
  const shouldHide = hiddenPrefixes.some((prefix) => pathname.startsWith(prefix));

  if (shouldHide) {
    return null;
  }

  return (
      <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HNX Solutions on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-22 right-3 z-50 grid h-[60px] w-[60px] animate-[whatsappFloat_3s_ease-in-out_infinite] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_22px_55px_rgba(37,211,102,0.45)] active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300/60 motion-reduce:animate-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 dark:shadow-[0_18px_45px_rgba(37,211,102,0.25)] sm:bottom-11 sm:right-3 sm:h-[72px] sm:w-[72px]"
    >
      {/* Soft outer pulse glow */}
      <span className="absolute inset-0 -z-20 animate-[whatsappPulse_2.4s_ease-out_infinite] rounded-full bg-[#25D366]/35" />

      {/* Constant blurry glow */}
      <span className="absolute -inset-3 -z-30 rounded-full bg-[#25D366]/25 blur-xl" />

      {/* Glitter particles */}
      <span className="pointer-events-none absolute -top-1 left-2 h-1.5 w-1.5 animate-[whatsappSparkle_1.8s_ease-in-out_infinite] rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.95)]" />
      <span className="pointer-events-none absolute right-1 top-2 h-1 w-1 animate-[whatsappSparkle_2.2s_ease-in-out_infinite_0.35s] rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
      <span className="pointer-events-none absolute -bottom-1 right-3 h-1.5 w-1.5 animate-[whatsappSparkle_2s_ease-in-out_infinite_0.7s] rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.95)]" />
      <span className="pointer-events-none absolute bottom-2 left-0 h-1 w-1 animate-[whatsappSparkle_2.4s_ease-in-out_infinite_1s] rounded-full bg-white/75 shadow-[0_0_10px_rgba(255,255,255,0.9)]" />

      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="relative z-10 h-11 w-10 transition-transform duration-300 ease-out group-hover:rotate-6 group-hover:scale-110"
        fill="currentColor"
      >
        <path d="M16.02 3.2c-7.02 0-12.73 5.68-12.73 12.67 0 2.24.59 4.43 1.71 6.35L3.2 28.8l6.75-1.77a12.82 12.82 0 0 0 6.07 1.54c7.02 0 12.73-5.68 12.73-12.67S23.04 3.2 16.02 3.2Zm0 23.22c-1.9 0-3.77-.51-5.4-1.48l-.39-.23-4.01 1.05 1.07-3.89-.25-.4a10.43 10.43 0 0 1-1.61-5.6c0-5.81 4.75-10.53 10.59-10.53 5.84 0 10.59 4.72 10.59 10.53 0 5.81-4.75 10.55-10.59 10.55Zm5.8-7.9c-.32-.16-1.88-.92-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.6-1.9-1.79-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.64s1.13 3.06 1.29 3.27c.16.21 2.23 3.39 5.41 4.75.76.33 1.35.53 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
