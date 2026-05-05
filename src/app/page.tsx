'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero2'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import ServiceAreas from '@/components/ServiceAreas'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <CTA />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
