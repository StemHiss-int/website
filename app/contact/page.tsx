import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="lab-bg w-full">
        <div className="bg-black/30 py-12">
          <h1 className="page-heading text-white">Contact</h1>
        </div>
      </div>

      <div className="accent-bar"></div>

      {/* Contact Form */}
      <section className="py-16 bg-background">
        <div className="content-container max-w-3xl">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>Fill out the form below to contact the STEMHiss team.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Message subject" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here" className="min-h-[150px]" />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8">
            <a href="mailto:stemhiss@gmail.com" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <Mail className="h-5 w-5" />
              <span>stemhiss@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

