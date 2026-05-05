import React from 'react'

interface Service {
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    title: 'Manpower Supply',
    image: 'Manpower Supply.jpg',
    description:
      'We supply vetted, trained workers across all trades — electricians, HVAC specialists, mechanical workers, general laborers, maintenance staff, and skilled technicians. Short-term or long-term, we get the right people to your site fast.',
  },
  {
    title: 'AC Installation & HVAC Works',
    image: 'HVAC-supply-installation-Service.webp',
    description:
      'We install split, window, and central AC systems, design full HVAC setups, and handle ducting, repairs, and preventive maintenance. Keeping your building cool in Al Jubail\'s extreme heat is not a luxury — it is a must.',
  },
  {
    title: 'Electrical Works',
    image: 'Electrical Works.webp',
    description:
      'Our certified electricians handle wiring, panel boards, lighting systems, fault detection, and energy-efficient upgrades. All work complies with SEC standards and local safety codes required in Al Jubail and Jubail Industrial City.',
  },
  {
    title: 'Mechanical Works',
    image: 'Mechanical Works.webp',
    description:
      'From equipment installation and industrial piping to fabrication and corrective maintenance, our mechanical team supports plants, warehouses, and construction projects with the precision that large-scale work demands.',
  },
  {
    title: 'Waterproofing Services',
    image: 'Waterproofing Services.webp',
    description:
      'We protect rooftops, basements, bathrooms, and wet areas from water damage using high-quality, long-lasting materials. We also locate and fix active leaks before they become expensive structural problems.',
  },
  {
    title: 'Maintenance Services',
    image: 'Maintenance Services.webp',
    description:
      'We offer Annual Maintenance Contracts (AMC), facility management, routine inspections, and emergency repairs. One contract covers your entire facility — no need to chase multiple vendors when something goes wrong.',
  },
]

export default function Services() {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Section Title */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-tight">
              <span className="text-color-azure-14">Al Jubail's Go-To </span>
              <span className="text-color-orange-53">Manpower & Contracting</span>
              <span className="text-color-azure-14"> Company</span>
            </h2>
            <p className="text-color-azure-23 text-base font-normal leading-7 max-w-3xl">
              D Line Technical Establishment has built its name in Al Jubail by doing one thing consistently — delivering results. Whether a client needs a single skilled
              technician for a day or a full workforce for a long-term industrial contract, we mobilize fast and work to the highest standards.
            </p>
            <p className="text-color-azure-23 text-base font-normal leading-7 max-w-3xl">
              We understand the Al Jubail market. The heat, the industrial scale, the safety requirements, and the tight deadlines are things we deal with every day. That
              experience is what separates us from a generic contractor. Our team is built for this environment — and so are our services.
            </p>
          </div>

          {/* Services Heading */}
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-color-azure-14">Our Services in Al Jubail</h3>
            <p className="text-color-azure-23 text-base font-normal">
              We cover every trade your project needs. No need to manage five different contractors — D Line handles it all.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-color-grey-92 overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-56 overflow-hidden group">
                  <img
                    src={`/${service.image}`}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-xl font-bold">{service.title}</h4>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-color-azure-23 text-base font-normal leading-7">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
