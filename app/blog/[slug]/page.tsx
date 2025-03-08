"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

// Blog posts data with Google Doc IDs
const blogPosts = [
  {
    slug: "gregor-mendel",
    title: "He Who Made Genetics",
    subtitle: "The Father of Modern Genetics",
    category: "Genetics",
    headerImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20180331-91tJuG1P1DxMVPllLJJeYQt5abJuHJ.png",
    googleDocId: "e/2PACX-1vSJiLYBOwY0VxUwiEm8e33IrNc3VU8CFXQMyTeVPHFAqzk5CeHVTaq1F89F3xXWIAQuL1DwRorgLsmqs", // Example Google Doc ID
    date: "March 1, 2025",
    author: "Velan Mangai Sivakumar",
  },
  {
    slug: "dna-structure",
    title: "Coming Soon",
    subtitle: "Coming Soon",
    category: "Genetics",
    headerImage: "/placeholder.svg?height=500&width=1000",
    googleDocId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms", // Example Google Doc ID
    date: "Coming Soon",
    author: "Coming Soon",
  },
  {
    slug: "infectious-diseases",
    title: "Coming Soon",
    subtitle: "Coming Soon",
    category: "Pathophysiology",
    headerImage: "/placeholder.svg?height=500&width=1000",
    googleDocId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms", // Example Google Doc ID
    date: "Coming Soon",
    author: "Coming Soon",
  },
  {
    slug: "einstein-relativity",
    title: "Coming Soon",
    subtitle: "Coming Soon",
    category: "Physics",
    headerImage: "/placeholder.svg?height=500&width=1000",
    googleDocId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms", // Example Google Doc ID
    date: "Coming Soon",
    author: "Coming Soon",
  },
  {
    slug: "fibonacci-sequence",
    title: "Coming Soon",
    subtitle: "Coming Soon",
    category: "Mathematics",
    headerImage: "/placeholder.svg?height=500&width=1000",
    googleDocId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms", // Example Google Doc ID
    date: "Coming Soon",
    author: "Coming Soon",
  },
]

// Helper function to get category color
const getCategoryColor = (categoryName) => {
  const categories = {
    Genetics: "bg-secondary",
    Pathophysiology: "bg-tertiary",
    Physics: "bg-primary",
    Mathematics: "bg-quaternary",
  }

  return categories[categoryName] || "bg-gray-500"
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug

  const [post, setPost] = useState(null)

  useEffect(() => {
    // Find the post that matches the slug
    const foundPost = blogPosts.find((p) => p.slug === slug)
    setPost(foundPost)
  }, [slug])

  if (!post) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    )
  }

  // Create the Google Docs embed URL
  const googleDocEmbedUrl = `https://docs.google.com/document/d/${post.googleDocId}/pub?embedded=true`

  return (
    <div className="flex-1 flex flex-col">
      {/* Header with background image */}
      <div
        className="relative h-[40vh] md:h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${post.headerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-12">
          <div
            className={`${getCategoryColor(post.category)} text-white px-4 py-1 rounded-full text-sm inline-block mb-4 w-fit`}
          >
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-2">{post.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">{post.subtitle}</p>
          <div className="flex items-center text-white/80 text-sm md:text-base">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </div>

      {/* Google Doc Embed */}
      <div className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-8">
            <iframe src={googleDocEmbedUrl} className="google-doc-embed" title={post.title}></iframe>
          </div>
        </div>
      </div>

      {/* Related Posts - Could be implemented in the future */}
    </div>
  )
}

