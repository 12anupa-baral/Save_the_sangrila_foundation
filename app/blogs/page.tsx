"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, Tag } from "lucide-react"

interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  date: string
  published: boolean
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs")
        if (response.ok) {
          const data = await response.json()
          setBlogs(data)
        }
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Stories & Updates</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Discover the impact of your support through our latest news, events, and inspiring stories from the
              communities we serve
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {blogs.map((blog) => (
                  <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <img
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-full md:w-80 h-64 object-cover"
                      />
                      <CardContent className="p-6 flex-1">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {blog.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {new Date(blog.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <User className="w-3 h-3" />
                            {blog.author}
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-3 text-balance">{blog.title}</h2>
                        <p className="text-muted-foreground mb-4 text-pretty">{blog.excerpt}</p>
                        <p className="text-muted-foreground text-sm line-clamp-3 text-pretty">{blog.content}</p>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              <aside className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Categories</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 rounded hover:bg-primary/10 text-foreground transition-colors">
                      All Stories
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded hover:bg-primary/10 text-muted-foreground transition-colors">
                      Events
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded hover:bg-primary/10 text-muted-foreground transition-colors">
                      Donations
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded hover:bg-primary/10 text-muted-foreground transition-colors">
                      Impact Stories
                    </button>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                  <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to receive our latest stories and updates directly in your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 rounded border border-border bg-background mb-3"
                  />
                  <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors font-medium">
                    Subscribe
                  </button>
                </Card>
              </aside>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
