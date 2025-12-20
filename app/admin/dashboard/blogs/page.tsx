"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react"
import { getAdminPassword } from "@/lib/admin-auth"
import Link from "next/link"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  author: string
  date: string
  published: boolean
}

export default function BlogsManagementPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const fetchBlogs = async () => {
    try {
      const password = getAdminPassword()
      const response = await fetch("/api/admin/blogs", {
        headers: {
          "x-admin-password": password || "",
        },
      })

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

  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleDelete = async () => {
    if (!deleteId) return

    try {
      const password = getAdminPassword()
      const response = await fetch(`/api/blogs/${deleteId}`, {
        method: "DELETE",
        headers: {
          "x-admin-password": password || "",
        },
      })

      if (response.ok) {
        setBlogs(blogs.filter((blog) => blog.id !== deleteId))
        setDeleteId(null)
      }
    } catch (error) {
      console.error("Error deleting blog:", error)
    }
  }

  const togglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const password = getAdminPassword()
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password || "",
        },
        body: JSON.stringify({ published: !currentStatus }),
      })

      if (response.ok) {
        setBlogs(blogs.map((blog) => (blog.id === id ? { ...blog, published: !currentStatus } : blog)))
      }
    } catch (error) {
      console.error("Error updating blog:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Blogs</h1>
          <p className="text-muted-foreground mt-2">Create, edit, and publish blog posts</p>
        </div>
        <Link href="/admin/dashboard/blogs/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Blog Post
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {blogs.map((blog) => (
          <Card key={blog.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">{blog.title}</CardTitle>
                    <Badge variant={blog.published ? "default" : "secondary"}>
                      {blog.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <CardDescription>{blog.excerpt}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Category: {blog.category}</p>
                  <p>Author: {blog.author}</p>
                  <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => togglePublish(blog.id, blog.published)}
                    title={blog.published ? "Unpublish" : "Publish"}
                  >
                    {blog.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Link href={`/admin/dashboard/blogs/edit/${blog.id}`}>
                    <Button variant="outline" size="sm">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={() => setDeleteId(blog.id)}>
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the blog post.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
