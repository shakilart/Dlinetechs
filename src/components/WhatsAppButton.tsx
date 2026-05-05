import React from 'react'

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <a
        href="https://wa.me/966550997683"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-color-green-59 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition hover:scale-110 block"
        aria-label="Contact via WhatsApp"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.98C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.33-3.88-.94l-.28-.15-2.89.45.46-2.89-.15-.28C4.33 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.53-8.8c-.2-.1-1.19-.59-1.38-.66-.19-.06-.33-.1-.47.1-.14.2-.53.66-.65.8-.13.14-.25.16-.45.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.19-1.1-1.38-.12-.2-.01-.3.08-.4.08-.08.19-.21.29-.31.1-.1.13-.17.2-.28.06-.11.03-.2-.03-.29-.06-.1-.47-1.13-.64-1.55-.17-.41-.33-.35-.47-.36-.12-.01-.26-.01-.4-.01s-.36.05-.55.25c-.19.2-.72.7-.72 1.73 0 1.02.74 2.01.84 2.15.1.14 1.41 2.16 3.42 3.03.48.21.85.33 1.14.42.48.15.91.13 1.25.08.38-.06 1.19-.49 1.35-.95.16-.47.16-.86.11-.95-.04-.09-.2-.14-.4-.25z" />
        </svg>
      </a>
    </div>
  )
}
