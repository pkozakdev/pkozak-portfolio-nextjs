"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Space_Mono } from "next/font/google"

const spaceMono = Space_Mono({ weight: "700", subsets: ["latin"] })

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  // { name: "PORTFOLIO", path: "/portfolio" },
  { name: "CV & SKILLS", path: "/cv-skills" },
  { name: "CONTACT ME", path: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 z-50">
            <Code className="h-8 w-8 text-primary" />
            <span className={`${spaceMono.className} text-lg font-bold text-foreground`}>
              Piotr Kozak
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "nav-link text-sm font-medium tracking-wider",
                  pathname === item.path ? "text-primary active" : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden z-50 p-2 rounded-lg transition-colors",
              isMobileMenuOpen 
                ? "text-foreground hover:bg-primary/10" 
                : "text-foreground hover:bg-foreground/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 md:hidden flex",
            isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          {/* Backdrop */}
          <div 
            className={cn(
              "absolute inset-0 bg-background/95 backdrop-blur-sm transition-opacity duration-300",
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div
            className={cn(
              "relative w-full flex flex-col justify-center items-center transition-all duration-300 transform",
              isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "relative text-2xl font-medium tracking-wide transition-all duration-300 px-4 py-2",
                    pathname === item.path 
                      ? "text-primary" 
                      : "text-foreground/70 hover:text-primary",
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  )}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${150 + index * 50}ms` : '0ms'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  {pathname === item.path && (
                    <span className="absolute inset-0 bg-primary/10 rounded-lg -z-10" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

