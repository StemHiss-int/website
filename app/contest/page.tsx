import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contest() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="lab-bg w-full">
        <div className="bg-black/30 py-12">
          <h1 className="page-heading text-white">Contest</h1>
        </div>
      </div>

      <div className="accent-bar"></div>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="content-container max-w-2xl">
          <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
            <h2 className="text-3xl font-bold">Coming soon</h2>
            <p className="mt-4 text-muted-foreground">
              Our STEM history contest platform is currently in development. Stay tuned for exciting opportunities to
              showcase your knowledge!
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Future Contest Information</CardTitle>
              <CardDescription>Here's what you can expect from our upcoming STEM history contests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium text-lg">Contest Categories</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Essay Writing - History of Scientific Discoveries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Digital Media - STEM History Visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Quiz Bowl - Test Your STEM History Knowledge</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Prizes</h3>
                <p className="text-muted-foreground mt-1">
                  Winners will receive recognition, certificates, and potential scholarships or internship opportunities
                  with our partner organizations.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg">Eligibility</h3>
                <p className="text-muted-foreground mt-1">
                  Contests will be open to middle school, high school, and undergraduate students with separate
                  divisions for each educational level.
                </p>
              </div>

              <Button className="w-full">Notify me when contests launch</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

