import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, ExternalLink, Website } from "lucide-react"

export default function Contacts() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="lab-bg w-full">
        <div className="bg-black/30 py-12">
          <h1 className="page-heading text-white">Contact Us</h1>
        </div>
      </div>

      <div className="accent-bar"></div>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="content-container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Board Members */}
            <Card className="md:col-span-2 lg:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Board Members</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded-md bg-accent/10">
                    <div className="font-medium">Velan Mangai Sivakumar</div>
                    <div className="text-sm text-muted-foreground">Founder and President</div>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>Add Email or Link</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-md bg-accent/10">
                    <div className="font-medium">Adil Mukhi</div>
                    <div className="text-sm text-muted-foreground">Vice President</div>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <Website className="h-4 w-4" />
                      <a
                        href="https://linktr.ee/adilm."
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                      >
                        LinkTree
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-md bg-accent/10">
                    <div className="font-medium">Aarush Vinay Rao</div>
                    <div className="text-sm text-muted-foreground">Vice President</div>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>Add Email or Link</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-md bg-accent/10">
                    <div className="font-medium">Anika Singh</div>
                    <div className="text-sm text-muted-foreground">Head of Communications</div>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>Add Email or Link</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-md bg-accent/10">
                    <div className="font-medium">Shyam Challa</div>
                    <div className="text-sm text-muted-foreground">Editor and Chief Writer</div>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>Add Email or Link</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-md bg-accent/10">
                    <div className="font-medium">Rudransh Tandon</div>
                    <div className="text-sm text-muted-foreground">Activities Coordinator</div>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>Add Email or Link</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Directory */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Contact Directory</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">stemhiss@gmail.com</p>
                      <p className="text-muted-foreground">Second Email</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        123 STEM Avenue
                        <br />
                        Science Building, Suite 456
                        <br />
                        Knowledge City, KS 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ExternalLink className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Social Media</h3>
                      <div className="space-y-1 mt-1">
                        <a href="#" className="block text-primary hover:underline">
                          Twitter
                        </a>
                        <a href="#" className="block text-primary hover:underline">
                          Instagram
                        </a>
                        <a href="#" className="block text-primary hover:underline">
                          YouTube
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

