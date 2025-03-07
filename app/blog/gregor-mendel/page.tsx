"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GregorMendelPage() {
  // Google Doc ID for embedding
  const googleDocId = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms" // Example Google Doc ID
  const googleDocEmbedUrl = `https://docs.google.com/document/d/${googleDocId}/pub?embedded=true`

  return (
    <div className="flex-1 flex flex-col">
      {/* Header with background image */}
      <div
        className="relative h-[40vh] md:h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20180331-91tJuG1P1DxMVPllLJJeYQt5abJuHJ.png)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-12">
          <div className="bg-secondary text-white px-4 py-1 rounded-full text-sm inline-block mb-4 w-fit">Genetics</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-2">Gregor Mendel</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">The Father of Modern Genetics</p>
          <div className="flex items-center text-white/80 text-sm md:text-base">
            <span>March 15, 2025</span>
            <span className="mx-2">•</span>
            <span>By Shyam Challa</span>
          </div>
        </div>
      </div>

      {/* Google Doc Embed */}
      <div className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-8">
            <iframe
              src={googleDocEmbedUrl}
              className="google-doc-embed"
              title="Gregor Mendel: The Father of Modern Genetics"
            ></iframe>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/blog">
              <Button variant="outline" className="rounded-full">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

