import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-4 lg:space-y-16">
            {/* Logo */}
            <div className="flex justify-center ">
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={150}
                priority
              />
            </div>

            <h1 className="text-2xl sm:text-5xl lg:text-3xl font-bold leading-tight text-balance">
              Give a man a fish, and you feed him for a day.
              <p className="text-primary">
                Teach a man to fish, and you feed him for a lifetime.
              </p>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              Save the Sangrila Foundation is transforming the lives of children
              in Nepal through education, support, and opportunity. Every child
              deserves a chance to learn and thrive.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base"
              >
                Make a Difference Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent"
              >
                Learn More
              </Button>
            </div> */}
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/winter_cap.jpeg"
                alt="Children studying"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">
                Children Supported
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
