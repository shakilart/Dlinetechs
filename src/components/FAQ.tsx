'use client'

import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What services does D Line Technical Establishment provide in Al Jubail?',
    answer: 'D Line provides manpower supply, AC installation & HVAC works, electrical services, mechanical works, waterproofing, and maintenance services across Al Jubail.',
  },
  {
    question: 'Does D Line supply skilled workers for industrial projects in Jubail Industrial City?',
    answer: 'Yes, we supply vetted and trained workers for industrial projects in Jubail Industrial City with expertise in all trades.',
  },
  {
    question: 'How quickly can D Line Technical Establishment start work on a project in Al Jubail?',
    answer: 'We mobilize fast and can start work within a short timeframe. Contact us for specific project timelines.',
  },
  {
    question: 'Does D Line offer annual maintenance contracts in Al Jubail?',
    answer: 'Yes, we offer Annual Maintenance Contracts (AMC) and facility management services.',
  },
  {
    question: 'Are D Line\'s workers trained and certified to work in Saudi Arabia?',
    answer: 'Yes, all our workers are trained, vetted, and certified to work in Saudi Arabia following all safety standards.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold leading-tight mb-8">
          <span className="text-color-azure-14">Frequently Asked </span>
          <span className="text-color-orange-53">Questions</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-blue-900 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-800 hover:shadow-md transition-all duration-200 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent border-none rounded-t-lg"
                type="button"
              >
                <span className="text-white text-base font-normal flex-1">{faq.question}</span>
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center ml-4">
                  {openIndex === index ? (
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-blue-800">
                  <p className="text-white text-base font-normal leading-7">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
