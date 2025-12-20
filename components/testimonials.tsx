import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Anjali Sharma",
      role: "Student, 10th Grade",
      content:
        "Thanks to Save the Sangrila Foundation, I can now attend school and dream of becoming a teacher. Their support has changed my family's life.",
      image: "/young-nepali-girl-smiling.jpg",
    },
    {
      name: "Ramesh Thapa",
      role: "Parent",
      content:
        "The tuition classes have helped my son improve his grades dramatically. The teachers are caring and dedicated to every child's success.",
      image: "/nepali-father-portrait.jpg",
    },
    {
      name: "Sita Gurung",
      role: "Student, 12th Grade",
      content:
        "I'm the first in my family to reach 12th grade. Without this foundation's help, I would have dropped out years ago. Now I'm applying to university!",
      image: "/nepali-teenage-girl-confident.jpg",
    },
  ]

  return (
    <section id="stories" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Stories of Hope</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from the children and families whose lives have been transformed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 lg:p-8 hover:shadow-xl transition-shadow">
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
