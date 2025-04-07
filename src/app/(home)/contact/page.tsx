import { ContactSection } from "@/components/contact/contact";
import { ContactPageHero } from "@/components/contact/hero";

export default function ContactPage(){
    return (
        <main className="flex-1 flex flex-col relative z-10 [&>a]:text-white">
            <ContactPageHero />
            <ContactSection />
        </main>
    )
}