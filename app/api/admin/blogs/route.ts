import { type NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"

const BLOGS_FILE = join(process.cwd(), "data", "blogs.json")

export async function GET(request: NextRequest) {
  try {
    const adminPassword = request.headers.get("x-admin-password")

    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await readFile(BLOGS_FILE, "utf-8")
    const blogs = JSON.parse(data)

    // Return all blogs (including unpublished) for admin
    return NextResponse.json(blogs)
  } catch (error) {
    console.error("Error reading blogs:", error)
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}
