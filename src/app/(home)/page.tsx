"use client"

import { HomeHero } from "@/components/home/hero"
import { SuccessCasesSection } from "@/components/home/success"
import { ServicesSection } from "@/components/home/services"
import { TestimonialsSection } from "@/components/home/testimonials"
import { CallToActionSection } from "@/components/home/calltoaction"

export default function Home() {

  return (
    <main className="flex-1 pt-16 relative z-10">
        <HomeHero />
        <SuccessCasesSection />
        <ServicesSection />
        <TestimonialsSection />
        <CallToActionSection />
    </main>
  )
}

