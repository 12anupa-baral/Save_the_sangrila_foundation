import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Impact } from "@/components/impact"
import { Programs } from "@/components/programs"
import { Testimonials } from "@/components/testimonials"
import { BlogsPreview } from "@/components/blogs-preview"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Impact />
      <Programs />
      <Testimonials />
      <BlogsPreview />
      <CallToAction />
      <Footer />
    </main>
  )
}
