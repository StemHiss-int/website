"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"

// Define the navigation structure with nested items
const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
    subItems: [
      {
        name: "Genetics",
        href: "/blog/category/genetics",
        subItems: [
          { name: "Gregor Mendel", href: "/blog/gregor-mendel" },
          { name: "DNA Structure", href: "/blog/dna-structure" },
        ],
      },
      {
        name: "Pathophysiology",
        href: "/blog/category/pathophysiology",
        subItems: [{ name: "Infectious Diseases", href: "/blog/infectious-diseases" }],
      },
    ],
  },
  {
    name: "Newsletter",
    href: "/newsletter",
  },
  {
    name: "Videos",
    href: "/videos",
  },
  {
    name: "Get Involved",
    href: "/get-involved",
  },
  {
    name: "Contacts",
    href: "/contacts",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

// Recursive component to render menu items and their children
const MenuItem = ({ item, pathname, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasSubItems = item.subItems && item.subItems.length > 0
  const isActive = pathname === item.href
  const isParentOfActive =
    hasSubItems &&
    item.subItems.some(
      (subItem) =>
        pathname === subItem.href ||
        (subItem.subItems && subItem.subItems.some((nestedItem) => pathname === nestedItem.href)),
    )

  // Auto-expand if this item or any of its children are active
  useState(() => {
    if (isActive || isParentOfActive) {
      setIsOpen(true)
    }
  })

  if (level === 0) {
    return (
      <div>
        <div
          className={cn("sidebar-menu-item", (isActive || isParentOfActive) && "active")}
          onClick={() => (hasSubItems ? setIsOpen(!isOpen) : null)}
        >
          <Link href={item.href} className="flex-1">
            {item.name}
          </Link>
          {hasSubItems && (
            <button className="p-1">{isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</button>
          )}
        </div>

        {hasSubItems && isOpen && (
          <div className="sidebar-submenu">
            {item.subItems.map((subItem, index) => (
              <MenuItem key={index} item={subItem} pathname={pathname} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div>
        <div
          className={cn("sidebar-submenu-item", (isActive || isParentOfActive) && "active")}
          onClick={() => (hasSubItems ? setIsOpen(!isOpen) : null)}
        >
          <Link href={item.href} className="flex-1">
            {item.name}
          </Link>
          {hasSubItems && (
            <button className="p-1">{isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</button>
          )}
        </div>

        {hasSubItems && isOpen && (
          <div className="ml-4 mt-1 space-y-1">
            {item.subItems.map((subItem, index) => (
              <MenuItem key={index} item={subItem} pathname={pathname} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="sidebar-menu">
      {/* Logo */}
      <div className="p-4 flex justify-center">
        <Link href="/" className="flex flex-col items-center gap-2">
          <div className="relative w-16 h-16 overflow-hidden rounded-full bg-white/20 p-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-nXbGd21nGs9MMFlx9j7w6OoTLWtM2G.png"
              alt="STEMHiss Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <span className="text-xl font-bold">STEMHiss</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-2">
        {navItems.map((item, index) => (
          <MenuItem key={index} item={item} pathname={pathname} />
        ))}
      </nav>
    </div>
  )
}

