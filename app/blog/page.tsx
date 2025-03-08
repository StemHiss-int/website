import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Blog categories with their associated colors
const categories = [
  { name: "Genetics", color: "bg-primary", href: "/blog/category/genetics" },
  { name: "Pathophysiology", color: "bg-secondary", href: "/blog/category/pathophysiology" },
  { name: "Physics", color: "bg-tertiary", href: "/blog/category/physics" },
  { name: "Mathematics", color: "bg-quaternary", href: "/blog/category/mathematics" },
]

export default function BlogPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="blog-header relative flex items-center justify-center py-16">
        <div className="absolute inset-0 z-0">
          <div className="floating-blob top-10 left-1/4 w-20 h-20 bg-white/20"></div>
          <div className="floating-blob bottom-10 right-1/3 w-16 h-16 bg-white/20"></div>
          <div className="floating-blob top-1/2 right-1/4 w-24 h-24 bg-white/20"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold font-serif italic text-quaternary mb-4">Our Blog</h1>
          <p className="text-xl text-quaternary/90 max-w-2xl mx-auto">
            Explore the fascinating history of STEM through our collection of articles
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
                  variant="outline"
                  className={`rounded-full border-2 ${category.color.replace("bg-", "border-")} ${category.color.replace("bg-", "text-")}`}
                >
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Gregor Mendel Post */}
            <div className="blog-card">
              <div className="blog-card-image">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20180331-91tJuG1P1DxMVPllLJJeYQt5abJuHJ.png"
                  alt="Gregor Mendel"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Genetics
                </div>
              </div>
              <div className="blog-card-content">
                <div className="text-sm text-muted-foreground mb-2">March 15, 2025</div>
                <h3 className="text-xl font-bold mb-2">He Who Made Genetics</h3>
                <p className="text-muted-foreground mb-4">
                  Explore the life and work of Gregor Mendel, the father of modern genetics and how his work with pea
                  plants revolutionized our understanding of heredity.
                </p>
                <Link href="/blog/gregor-mendel">
                  <Button className="rounded-full bg-primary hover:bg-primary/90">Read More</Button>
                </Link>
              </div>
            </div>

            {/* Coming Soon Posts */}
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="coming-soon-card">
                <div className="coming-soon-blob -top-10 -left-10 w-40 h-40 bg-primary"></div>
                <div className="coming-soon-blob bottom-10 right-10 w-32 h-32 bg-secondary"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
                  <p className="text-muted-foreground">
                    New STEM history articles are on the way! Stay tuned for more fascinating stories.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

