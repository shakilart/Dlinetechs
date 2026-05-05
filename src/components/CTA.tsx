import React from 'react'
import Button from './Button'

export default function CTA() {
  return (
    <section className="w-full bg-color-azure-34 px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden relative">
          {/* Background gradient */}
          <div className="absolute inset-0 opacity-30 bg-radial" />

          {/* Content */}
          <div className="relative z-10 text-center space-y-6 py-16">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                className="w-32 h-20 object-contain"
                src="/vision-2030-logo-B45Abkln-300x203.webp"
                alt="Vision 2030 Logo"
              />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold">
              <span className="text-white">Get a </span>
              <span className="text-color-orange-53">Free Quote</span>
              <span className="text-white"> Before Your Competition Gets Ahead</span>
            </h2>

            {/* Description */}
            <p className="text-white text-base font-normal leading-7 max-w-2xl mx-auto">
              Every day without the right contractor on your project is money left on the table.
              Contact D Line Technical Establishment now — we respond within hours, not days.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                variant="secondary"
                text="Call Us Now"
                icon={true}
                href="tel:+966550997683"
              />
              <Button
                variant="primary"
                text="WhatsApp — Fast Reply"
                icon={true}
                className="bg-lime-600 hover:bg-lime-700"
                href="https://wa.me/966550997683"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
