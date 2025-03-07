"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Space_Mono } from "next/font/google"
import MobileMenu from "./mobile-menu"

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
    
    // Check initial scroll position
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const openMenu = () => {
      // Calculate position before any DOM changes
      const scrollY = window.scrollY;
      
      // Apply positioning to body without causing reflow/layout shift
      document.body.style.top = `-${scrollY}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // Store the scroll position for later restoration
      document.body.dataset.scrollPosition = scrollY.toString();
    };
    
    const closeMenu = () => {
      if (document.body.style.position === 'fixed') {
        // Get the saved scroll position
        const scrollY = parseInt(document.body.dataset.scrollPosition || '0');
        
        // Reset body styles
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
        
        // Restore scroll position in next tick to prevent layout shifts
        window.requestAnimationFrame(() => {
          window.scrollTo(0, scrollY);
        });
        
        delete document.body.dataset.scrollPosition;
      }
    };
    
    // Toggle menu state
    if (isMobileMenuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
    
    return () => {
      // Clean up in case component unmounts with menu open
      if (document.body.style.position === 'fixed') {
        closeMenu();
      }
    };
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
              "md:hidden z-[100] p-2 rounded-lg transition-colors",
              isMobileMenuOpen 
                ? "text-foreground" 
                : "text-foreground"
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

        {/* Using the Portal-based Mobile Menu component */}
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navItems={navItems}
        />
      </div>
    </header>
  )
}

