"use client"

import { HomeHeader } from "@/components/home/header"
import { HomeHero } from "@/components/home/hero"
import { SuccessCasesSection } from "@/components/home/success"
import { ServicesSection } from "@/components/home/services"
import { TestimonialsSection } from "@/components/home/testimonials"
import { CallToActionSection } from "@/components/home/calltoaction"
import { ContactSection } from "@/components/home/contact"
import { HomeFooter } from "@/components/home/footer"

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-[#050505]">
      <HomeHeader />
      <main className="flex-1 pt-16 relative z-10">
        <HomeHero />
        <SuccessCasesSection />
        <ServicesSection />
        <TestimonialsSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <HomeFooter />
    </div>
  )
}

