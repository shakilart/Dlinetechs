import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-16">
      <div className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/Harga-Minyak-1101.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-color-azure-34/70" />

        <div className="relative min-h-[620px] px-6 py-24 lg:px-16">
            <div className="max-w-4xl text-white">
              <div className="space-y-4">
                <div className="text-base font-normal">مؤسسة دي لاين التقنية</div>

                <h1 className="text-5xl font-bold leading-tight">
                  D Line Technical Establishment |<br />
                  Manpower Supply in Jubail
                </h1>

                <p className="text-base font-normal leading-7 max-w-2xl">
                  D Line Technical Establishment delivers trusted manpower supply, AC installation, electrical, and
                  mechanical services in Al Jubail, Saudi Arabia. Call us today.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button variant="primary" text="Read More" icon={true} />
                  <Button variant="secondary" text="Contact Us" icon={true} />
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
