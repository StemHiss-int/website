import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-tertiary/30 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-40 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
          <div className="w-32 h-32 relative mb-6 blob-shape overflow-hidden bg-white p-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-MlNXjaPzTkex1vj7Vs7FkRF7q4pZtP.png"
              alt="STEMHiss Logo"
              fill
              className="object-contain"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-serif italic mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-tertiary to-primary">
            STEMHiss
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            A student-led organization dedicated to communicating STEM history
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-involved">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8">
                Get Involved
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-tertiary text-tertiary hover:bg-tertiary/10"
              >
                Explore Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-quaternary/10 blob-shape-alt"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 blob-shape"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-center">
              One in two students find STEM too difficult or boring to study despite 7 in 10 students desiring a career
              in STEM. We are here to change that.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-secondary to-tertiary">
            Latest from Our Blog
          </h2>

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
                  Explore the life and work of Gregor Mendel, the father of modern genetics.
                </p>
                <Link href="/blog/gregor-mendel">
                  <Button className="rounded-full bg-primary hover:bg-primary/90">Read More</Button>
                </Link>
              </div>
            </div>

            {/* Coming Soon Posts */}
            {[1, 2].map((_, index) => (
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

          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button
                variant="outline"
                className="rounded-full px-8 border-secondary text-secondary hover:bg-secondary/10"
              >
                View All Blog Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Information Links */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-quaternary/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-tertiary/20 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <Link href="#what-is-stem">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border-l-8 border-secondary">
                <h3 className="text-xl font-medium">What is STEM and why is it important?</h3>
                <p className="text-muted-foreground mt-2">Video by Earth Science Women+ Australia</p>
              </div>
            </Link>

            <Link href="#stem-history">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border-l-8 border-tertiary">
                <h3 className="text-xl font-medium">A very brief overview of the history of STEM</h3>
                <p className="text-muted-foreground mt-2">Video by STEMEducation.org</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
