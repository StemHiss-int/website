"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Blog",
    href: "/blog",
    subItems: [
      {
        name: "Genetics",
        href: "/blog/category/genetics",
        subItems: [{ name: "Gregor Mendel", href: "/blog/gregor-mendel" }],
      },
      {
        name: "Pathophysiology",
        href: "/blog/category/pathophysiology",
      },
    ],
  },
  { name: "Newsletter", href: "/newsletter" },
  { name: "Videos", href: "/videos" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contacts", href: "/contacts" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([])

  const toggleSubMenu = (name: string) => {
    setOpenSubMenus((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  const isActive = (href: string) => pathname === href

  const renderNavItems = (items: any[], mobile = false) => {
    return items.map((item, index) => {
      const hasSubItems = item.subItems && item.subItems.length > 0
      const isSubMenuOpen = openSubMenus.includes(item.name)

      if (hasSubItems) {
        return (
          <div key={index} className={mobile ? "mb-2" : "relative group"}>
            <button
              onClick={() => mobile && toggleSubMenu(item.name)}
              className={cn(mobile ? "mobile-menu-link w-full text-left" : "nav-link", isActive(item.href) && "active")}
            >
              {item.name}
            </button>

            <div
              className={cn(
                mobile
                  ? "mt-1 ml-4 space-y-1"
                  : "absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200",
                mobile && isSubMenuOpen ? "block" : mobile ? "hidden" : "",
              )}
            >
              {item.subItems.map((subItem: any, subIndex: number) => (
                <div key={subIndex}>
                  <Link
                    href={subItem.href}
                    className={cn(
                      mobile
                        ? "mobile-menu-link block"
                        : "block px-4 py-2 rounded-lg hover:bg-primary/10 text-foreground",
                      isActive(subItem.href) && (mobile ? "active" : "bg-primary/10"),
                    )}
                  >
                    {subItem.name}
                  </Link>

                  {subItem.subItems && (
                    <div className={mobile ? "ml-4 mt-1" : "ml-4"}>
                      {subItem.subItems.map((nestedItem: any, nestedIndex: number) => (
                        <Link
                          key={nestedIndex}
                          href={nestedItem.href}
                          className={cn(
                            mobile
                              ? "mobile-menu-link block"
                              : "block px-4 py-2 rounded-lg hover:bg-primary/10 text-foreground",
                            isActive(nestedItem.href) && (mobile ? "active" : "bg-primary/10"),
                          )}
                        >
                          {nestedItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      }

      return (
        <Link
          key={index}
          href={item.href}
          className={cn(mobile ? "mobile-menu-link" : "nav-link", isActive(item.href) && "active")}
        >
          {item.name}
        </Link>
      )
    })
  }

  return (
    <>
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 overflow-hidden rounded-full bg-white/20 p-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-MlNXjaPzTkex1vj7Vs7FkRF7q4pZtP.png"
                alt="STEMHiss Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold">STEMHiss</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu">{renderNavItems(navItems)}</nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("mobile-menu md:hidden", isMobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="mobile-menu-content">{renderNavItems(navItems, true)}</div>
      </div>
    </>
  )
}

