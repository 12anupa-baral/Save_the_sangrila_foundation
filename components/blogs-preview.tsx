"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Blog {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

export function BlogsPreview() {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs")
        if (response.ok) {
          const data = await response.json()
          // Show only the first 3 blogs
          setBlogPosts(data.slice(0, 3))
        }
      } catch (error) {
        console.error("Error fetching blogs:", error)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Stories & Updates</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Stay connected with the latest news, events, and heartwarming stories from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 text-balance">{post.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{post.excerpt}</p>
                <Link
                  href={`/blogs/${post.id}`}
                  className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/blogs">View All Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
