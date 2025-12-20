import { type NextRequest, NextResponse } from "next/server"
import { readFile, writeFile } from "fs/promises"
import { join } from "path"

const BLOGS_FILE = join(process.cwd(), "data", "blogs.json")

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await readFile(BLOGS_FILE, "utf-8")
    const blogs = JSON.parse(data)
    const blog = blogs.find((b: any) => b.id === params.id)

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    return NextResponse.json(blog)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const adminPassword = request.headers.get("x-admin-password")

    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const updatedBlog = await request.json()
    const data = await readFile(BLOGS_FILE, "utf-8")
    const blogs = JSON.parse(data)

    const index = blogs.findIndex((b: any) => b.id === params.id)
    if (index === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    blogs[index] = { ...blogs[index], ...updatedBlog }
    await writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2))

    return NextResponse.json(blogs[index])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const adminPassword = request.headers.get("x-admin-password")

    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await readFile(BLOGS_FILE, "utf-8")
    const blogs = JSON.parse(data)

    const filteredBlogs = blogs.filter((b: any) => b.id !== params.id)

    if (filteredBlogs.length === blogs.length) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    await writeFile(BLOGS_FILE, JSON.stringify(filteredBlogs, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 })
  }
}
