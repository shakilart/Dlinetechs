import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: 'rgb(29, 82, 144)' }}>
      {/* Main Footer */}
      <div className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About Column */}
            <div className="space-y-4">
              <img
                className="w-72 h-12 object-contain"
                src="/footer logo.webp"
                alt="D Line Footer Logo"
              />
              <p className="text-white text-base font-normal leading-7">
                D Line Technical Establishment delivers trusted
                manpower supply, AC installation, electrical, and
                mechanical services in Al Jubail, Saudi Arabia.
              </p>
            </div>

            {/* Useful Links */}
            <div className="space-y-4">
              <h3 className="text-white text-3xl font-bold">Useful Links</h3>
              <nav className="space-y-2">
                <a href="#" className="text-white text-base font-normal hover:text-color-orange-53 transition">
                  Home
                </a>
              </nav>
            </div>

            {/* Contact Us */}
            <div className="space-y-6">
              <h3 className="text-white text-3xl font-bold">Contact Us</h3>

              {/* Phone */}
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-white rounded flex-shrink-0 mt-1" />
                <a href="tel:+966550997683" className="text-white text-base font-normal hover:text-color-orange-53 transition">
                  +966 55 099 7683
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4h14v10H1z" />
                    <path d="M1 4l7 4 7-4" strokeWidth="1" fill="none" stroke="white" />
                  </svg>
                </div>
                <a href="mailto:dlinetechnicalestablishment@gmail.com" className="text-white text-base font-normal hover:text-color-orange-53 transition break-all">
                  dlinetechnicalestablishment@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 flex-shrink-0 mt-1">
                  <svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1C5 1 2.5 3.5 2.5 6c0 4 5.5 9 5.5 9s5.5-5 5.5-9c0-2.5-2.5-5-5.5-5z" />
                  </svg>
                </div>
                <address className="text-white text-base font-normal not-italic leading-7">
                  الجبيل - شارع عمر بن عبد العزيز - بجانب الأحوال المدينة<br />
                  Jubail - Omar bin Abdulaziz St. - Near to Civil Affairs
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-color-orange-53 px-6 md:px-20 py-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-base font-normal">
            © 2026 D Line Technical Establishment
          </p>
        </div>
      </div>
    </footer>
  )
}
