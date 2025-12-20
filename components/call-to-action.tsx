import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-primary text-primary-foreground p-8 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 lg:space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
              <Heart className="w-8 h-8" fill="currentColor" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Your Support Changes Lives</h2>

            <p className="text-lg lg:text-xl text-primary-foreground/90 text-pretty">
              Join us in our mission to provide education and hope to children in Nepal. Every contribution, no matter
              how small, makes a real difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Become a Volunteer
              </Button>
            </div>

            <div className="pt-8 border-t border-primary-foreground/20">
              <p className="text-sm mb-4 text-primary-foreground/80">Stay updated with our work</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
