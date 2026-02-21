"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            {/* <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Save the Sangrila</span> */}
            <Image src="/logo.png" alt="Burger" width={70} height={70} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/#programs"
              className="text-foreground hover:text-primary transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/#impact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Impact
            </Link>
            <Link
              href="/blogs"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/#stories"
              className="text-foreground hover:text-primary transition-colors"
            >
              Stories
            </Link>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Donate Now
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/#about"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#programs"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/#impact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Impact
              </Link>
              <Link
                href="/blogs"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/#stories"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stories
              </Link>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
