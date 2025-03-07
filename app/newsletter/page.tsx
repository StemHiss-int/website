import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Newsletter() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="lab-bg w-full">
        <div className="bg-black/30 py-12">
          <h1 className="page-heading text-white">Newsletter</h1>
        </div>
      </div>

      <div className="accent-bar"></div>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="content-container max-w-2xl">
          <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
            <h2 className="text-3xl font-bold">Coming soon</h2>
            <p className="mt-4 text-muted-foreground">
              Our newsletter is currently in development. Sign up below to be notified when we launch!
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Subscribe to our Newsletter</CardTitle>
              <CardDescription>
                Get the latest STEM history articles, events, and resources delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="pt-2">
                  <Button className="w-full" type="submit">
                    Subscribe
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

