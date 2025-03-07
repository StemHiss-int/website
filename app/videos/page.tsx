import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Videos() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="lab-bg w-full">
        <div className="bg-black/30 py-12">
          <h1 className="page-heading text-white">Videos</h1>
        </div>
      </div>

      <div className="accent-bar"></div>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="content-container max-w-2xl">
          <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
            <h2 className="text-3xl font-bold">Coming soon</h2>
            <p className="mt-4 text-muted-foreground">
              Our video content is currently in production. Check back soon for educational videos about STEM history!
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Planned Video Content</CardTitle>
              <CardDescription>Here's a preview of the video content we're working on</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="p-3 bg-accent/20 rounded-md">
                  <span className="font-medium">The Life of Marie Curie</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Exploring the remarkable life and discoveries of the first woman to win a Nobel Prize
                  </p>
                </li>
                <li className="p-3 bg-accent/20 rounded-md">
                  <span className="font-medium">Alan Turing and the Birth of Computer Science</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    How Turing's work laid the foundation for modern computing
                  </p>
                </li>
                <li className="p-3 bg-accent/20 rounded-md">
                  <span className="font-medium">The History of DNA Discovery</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    From Mendel to Watson and Crick: The fascinating journey to understanding our genetic code
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

