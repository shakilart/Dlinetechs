import React from 'react'
import Button from './Button'

export default function About() {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image */}
          <div className="flex-1">
            <img
              className="w-full h-72 md:h-96 object-cover rounded-lg"
              src="/about-hero.png"
              alt="About D Line"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            {/* About Badge */}
            <div className="inline-flex px-6 py-2 bg-color-orange-53 rounded-full">
              <span className="text-white text-sm font-normal">About</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight">
              <span className="text-color-azure-14">Trusted Manpower Supply & Contracting</span>
              <br />
              <span className="text-color-orange-53">Services in Al Jubail, Saudi Arabia</span>
            </h2>

            {/* Description */}
            <p className="text-color-azure-23 text-base font-normal leading-7 space-y-4">
              Running a project in Al Jubail without the right team behind you is a losing
              battle. Delays cost money. Wrong workers cost more. And poor-quality work
              means having to do it all over again. At D Line Technical Establishment, we
              take that problem off your plate completely. We supply trained, reliable
              workers and deliver full contracting services for residential, commercial, and
              industrial projects across Al Jubail and Jubail Industrial City — all under one
              roof, with no wasted time.
            </p>

            {/* Button */}
            <div className="pt-4">
              <Button
                variant="orange"
                text="Contact Us"
                icon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
