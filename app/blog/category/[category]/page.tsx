"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

// Blog categories with their associated colors
const categories = [
  { name: "genetics", displayName: "Genetics", color: "bg-secondary", href: "/blog/category/genetics" },
  {
    name: "pathophysiology",
    displayName: "Pathophysiology",
    color: "bg-tertiary",
    href: "/blog/category/pathophysiology",
  },
  { name: "physics", displayName: "Physics", color: "bg-primary", href: "/blog/category/physics" },
  { name: "mathematics", displayName: "Mathematics", color: "bg-quaternary", href: "/blog/category/mathematics" },
]

// Blog posts data
const allBlogPosts = [
  {
    title: "He Who Made Genetics",
    excerpt:
      "Explore the life and work of Gregor Mendel, the father of modern genetics and how his work with pea plants revolutionized our understanding of heredity.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20180331-91tJuG1P1DxMVPllLJJeYQt5abJuHJ.png",
    category: "genetics",
    displayCategory: "Genetics",
    slug: "gregor-mendel",
    date: "March 1, 2025",
  },
  {
    title: "Coming Soon",
    excerpt:
      "Coming Soon",
    image: "/placeholder.svg?height=300&width=400",
    category: "genetics",
    displayCategory: "Coming Soon",
    slug: "dna-structure",
    date: "Coming Soon",
  },
  {
    title: "Coming Soons",
    excerpt:
      "Coming Soon",
    image: "/placeholder.svg?height=300&width=400",
    category: "pathophysiology",
    displayCategory: "Coming Soon",
    slug: "infectious-diseases",
    date: "Coming Soon",
  },
  {
    title: "Coming Soon",
    excerpt:
      "Coming Soon",
    image: "/placeholder.svg?height=300&width=400",
    category: "physics",
    displayCategory: "Coming Soon",
    slug: "einstein-relativity",
    date: "Coming Soon",
  },
  {
    title: "Coming Soon",
    excerpt:
      "Coming Soon",
    image: "/placeholder.svg?height=300&width=400",
    category: "mathematics",
    displayCategory: "Coming Soon",
    slug: "fibonacci-sequence",
    date: "Coming Soon",
  },
]

// Helper function to get category color
const getCategoryColor = (categoryName) => {
  const category = categories.find((cat) => cat.name === categoryName.toLowerCase())
  return category ? category.color : "bg-gray-500"
}

// Helper function to get category display name
const getCategoryDisplayName = (categoryName) => {
  const category = categories.find((cat) => cat.name === categoryName.toLowerCase())
  return category ? category.displayName : categoryName
}

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.category

  const [blogPosts, setBlogPosts] = useState([])
  const [categoryDisplay, setCategoryDisplay] = useState("")
  const [categoryColor, setCategoryColor] = useState("")

  useEffect(() => {
    // Filter posts by category
    const filteredPosts = allBlogPosts.filter((post) => post.category.toLowerCase() === categorySlug.toLowerCase())

    setBlogPosts(filteredPosts)
    setCategoryDisplay(getCategoryDisplayName(categorySlug))
    setCategoryColor(getCategoryColor(categorySlug))
  }, [categorySlug])

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className={`blog-header relative flex items-center justify-center py-16 ${categoryColor}`}>
        <div className="absolute inset-0 z-0">
          <div className="floating-blob top-10 left-1/4 w-20 h-20 bg-white/20"></div>
          <div className="floating-blob bottom-10 right-1/3 w-16 h-16 bg-white/20"></div>
          <div className="floating-blob top-1/2 right-1/4 w-24 h-24 bg-white/20"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold font-serif italic text-white mb-4">{categoryDisplay}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our articles about {categoryDisplay.toLowerCase()}
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/blog">
              <Button variant="outline" className="rounded-full">
                All Categories
              </Button>
            </Link>

            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Button
                  variant={category.name === categorySlug.toLowerCase() ? "default" : "outline"}
                  className={`rounded-full ${
                    category.name === categorySlug.toLowerCase()
                      ? category.color
                      : `border-2 ${category.color.replace("bg-", "border-")} ${category.color.replace("bg-", "text-")}`
                  }`}
                >
                  {category.displayName}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {blogPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <div key={index} className="blog-card">
                  <div className="blog-card-image">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div
                      className={`absolute top-4 right-4 ${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-sm`}
                    >
                      {post.displayCategory}
                    </div>
                  </div>
                  <div className="blog-card-content">
                    <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button className={`rounded-full ${getCategoryColor(post.category)}`}>Read More</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-4">No posts found in this category</h3>
              <Link href="/blog">
                <Button className="rounded-full">View All Posts</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

