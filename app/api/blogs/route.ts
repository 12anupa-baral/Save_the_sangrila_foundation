import { type NextRequest, NextResponse } from "next/server"
import { readFile, writeFile } from "fs/promises"
import { join } from "path"

const BLOGS_FILE = join(process.cwd(), "data", "blogs.json")

export async function GET() {
  try {
    const data = await readFile(BLOGS_FILE, "utf-8")
    const blogs = JSON.parse(data)

    // Return only published blogs for public access
    const publishedBlogs = blogs.filter((blog: any) => blog.published)
    return NextResponse.json(publishedBlogs)
  } catch (error) {
    console.error("Error reading blogs:", error)
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const adminPassword = request.headers.get("x-admin-password")

    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const newBlog = await request.json()
    const data = await readFile(BLOGS_FILE, "utf-8")
    const blogs = JSON.parse(data)

    // Generate new ID
    const maxId = blogs.reduce((max: number, blog: any) => Math.max(max, Number.parseInt(blog.id)), 0)
    newBlog.id = String(maxId + 1)
    newBlog.date = new Date().toISOString().split("T")[0]

    blogs.push(newBlog)
    await writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2))

    return NextResponse.json(newBlog)
  } catch (error) {
    console.error("Error creating blog:", error)
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 })
  }
}
