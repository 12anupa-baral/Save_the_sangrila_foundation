import { Card } from "@/components/ui/card"
import { BookOpen, Heart, Users, GraduationCap } from "lucide-react"

export function Impact() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Children Helped",
      description: "Students receiving educational support",
    },
    {
      icon: BookOpen,
      value: "50+",
      label: "Tuition Classes",
      description: "Free classes offered weekly",
    },
    {
      icon: Heart,
      value: "$100K+",
      label: "Donations Raised",
      description: "Direct impact on education",
    },
    {
      icon: GraduationCap,
      value: "95%",
      label: "Pass Rate",
      description: "Students succeeding academically",
    },
  ]

  return (
    <section id="impact" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Impact in Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every contribution makes a real difference in the lives of children across Nepal
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
