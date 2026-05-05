import React from 'react'

export default function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-0">
        <div className="h-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-12 sm:h-16 w-auto object-contain"
              src="/header-logo.png"
              alt="D Line Technical Establishment"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 w-full sm:w-auto">
            <a href="#" className="text-lg text-color-azure-14 font-normal hover:text-color-orange-53 transition">
              Home
            </a>
            <button className="w-full sm:w-auto px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition">
              Call Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
