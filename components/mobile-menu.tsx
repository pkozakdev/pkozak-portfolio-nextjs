"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; path: string }>
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Mount check to support SSR
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Only render the menu in the browser
  if (!mounted) return null

  // Use createPortal to render the menu at the document root level
  return createPortal(
    <div
      className={`fixed inset-0 z-[90] md:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-md"
        onClick={onClose}  
      ></div>
      
      {/* Close Button - positioned in the same place as menu button in navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Logo placeholder to match navbar */}
            <div className="h-8 w-8"></div>
            <span className="text-lg font-bold"></span>
          </div>
          
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="p-2 rounded-lg transition-colors z-[100]"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <nav className="absolute inset-0 flex flex-col items-center justify-center gap-8">
        {navItems.map((item, index) => (
          <Link
            key={item.path}
            href={item.path}
            className={`text-2xl font-medium tracking-wide px-4 py-2 transition-all duration-300 transform relative ${
              pathname === item.path ? "text-primary" : "text-foreground/70 hover:text-primary"
            } ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
            style={{
              transitionDelay: isOpen ? `${index * 0.075}s` : "0s",
            }}
            onClick={onClose}
          >
            {item.name}
            {pathname === item.path && <div className="absolute inset-0 bg-primary/10 rounded-lg -z-10"></div>}
          </Link>
        ))}
      </nav>
    </div>,
    document.body
  )
}