import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, DollarSign, Users } from "lucide-react"

export function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: "Educational Support",
      description:
        "We provide full and partial scholarships to children from single parents, covering school fees, uniforms, books, and supplies.",
      image: "/eductaion_support.jpeg",
    },
    {
      icon: DollarSign,
      title: "Emergency Relief Program",
      description:
        "Material and financial assistance for families in need, helping during time of emergencies and relief work.",
      image: "/relief.jpg",
    },
    {
      icon: Users,
      title: "Student to Student Tution Program",
      description:
        "Our after-school tutoring and mentorship program helps junior students excel academically while empowering senior students to support and uplift those in need",
      image: "/sts.jpg",
    },
  ];

  return (
    <section id="programs" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">How We Help</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our three core programs work together to provide comprehensive support for children&apos;s education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Learn more →
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
