import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Empowering Nepal&apos;s <span className="text-primary">Future Leaders</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              Save the Sangrila Foundation is transforming the lives of hundreds of children in Nepal through education,
              support, and opportunity. Every child deserves a chance to learn and thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                Make a Difference Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img src="/happy-nepali-children-studying-in-classroom.jpg" alt="Children studying" className="object-cover w-full h-full" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Children Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
