import React from 'react'

interface Reason {
  title: string
  description: string
  icon: number
}

const reasons: Reason[] = [
  {
    title: 'Skilled & Vetted Workforce',
    description: 'Every worker is selected, trained, and ready to perform from day one.',
    icon: 1,
  },
  {
    title: 'On-Time Delivery',
    description: 'We respect your timelines. Delays cost you money, and we treat that seriously.',
    icon: 2,
  },
  {
    title: 'Competitive Pricing',
    description: 'Fair, transparent rates. No hidden charges, no surprises on your invoice.',
    icon: 3,
  },
  {
    title: 'Safety First',
    description: 'All work follows Saudi safety standards and site-specific requirements.',
    icon: 4,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-color-azure-14">Why Al Jubail People Choose D Line</h2>
            <p className="text-color-azure-23 text-base font-normal leading-7">
              We are not a general contractor trying to cover too many things at once. Every
              service we offer is one we have performed hundreds of times across Al Jubail's
              residential compounds, commercial buildings, and heavy industrial sites in Jubail
              Industrial City.
            </p>

            {/* Reasons Cards */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-color-grey-94 p-6 space-y-3 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-color-orange-53 rounded flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-color-azure-23 mb-2">{reason.title}</h4>
                      <p className="text-color-azure-23 text-base font-normal">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-color-azure-23 text-base font-normal leading-7">
              From a single maintenance visit to a full project contract, you get the same level of
              commitment and quality every time you work with D Line.
            </p>
          </div>

          {/* Right Image Area */}
          <div className="flex-1 rounded-lg overflow-hidden">
            <img
              src="/why Choose D Line.webp"
              alt="Why Choose D Line"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
