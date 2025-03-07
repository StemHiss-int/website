import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Users, Lightbulb } from "lucide-react"

export default function GetInvolved() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="lab-bg w-full">
        <div className="bg-black/30 py-12">
          <h1 className="page-heading text-white">Get Involved</h1>
        </div>
      </div>

      <div className="accent-bar"></div>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="content-container">
          <Tabs defaultValue="award" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="award" className="flex gap-2 items-center">
                <Award className="h-4 w-4" />
                <span>Scholar Award</span>
              </TabsTrigger>
              <TabsTrigger value="volunteer" className="flex gap-2 items-center">
                <Users className="h-4 w-4" />
                <span>Volunteer</span>
              </TabsTrigger>
              <TabsTrigger value="contribute" className="flex gap-2 items-center">
                <BookOpen className="h-4 w-4" />
                <span>Contribute</span>
              </TabsTrigger>
              <TabsTrigger value="ideas" className="flex gap-2 items-center">
                <Lightbulb className="h-4 w-4" />
                <span>Submit Ideas</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="award" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>STEM History International Scholar Award</CardTitle>
                  <CardDescription>
                    A prestigious, international award given to students who have shown exceptional prowess at the
                    communication of STEM History.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg">How to Participate</h3>
                    <p className="mt-2">
                      You can write articles about topics in the history of STEM. Example topics include "The life and
                      physics research of Richard Feynman", "the history of polymerase chain reactions", and "the
                      discovery of oxygen". You can win awards, including the International Stem History Scholar award
                      and gain volunteering hours for writing articles.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-md">
                    <h3 className="font-medium">Award Requirements:</h3>
                    <p className="mb-2">
                      Normally, the criteria to gain this award include successfully writing and publishing 5 blogs
                    </p>

                    <h4 className="font-medium mt-4">Requirements for your blog concerning STEM history:</h4>
                    <ul className="space-y-2 mt-2">
                      <li>• Times New Roman font size 12</li>
                      <li>• Relevant title, could be catchy</li>
                      <li>• Hook that draws the reader in at the beginning</li>
                      <li>• A detailed discussion of the science at hand, with figures to aid understanding</li>
                      <li>• A detailed discussion of the methods and experiments done by the scientists of the past</li>
                      <li>• Discussion of the uses, applications and importance of said science</li>
                      <li>• Historical images of scientists, their work etc.</li>
                      <li>• Minimal/no spelling or grammar errors</li>
                      <li>• No plagiarism</li>
                      <li>
                        • Citation of sources (Chicago endnotes/references format, in-text citations not required)
                      </li>
                      <li>• Citation of images and explanation of images if necessary (informal citation format)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg">Volunteering Hours:</h3>
                    <p className="mt-2">
                      Volunteering hours are given since this scholarly work that you will be doing is not for a salary.
                      Since researching the history of STEM can be an uphill and long task, 5 hours of volunteering will
                      be awarded per blog article even if you don't complete all the requirements for the award.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Apply for the Scholar Award</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="volunteer" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Opportunities</CardTitle>
                  <CardDescription>Join our team and help spread the knowledge of STEM history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>We're always looking for passionate volunteers to help with:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Content writing and research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Graphic design and social media</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Event organization and outreach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Website development and maintenance</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Apply to Volunteer</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="contribute" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contribute Content</CardTitle>
                  <CardDescription>Share your knowledge and passion for STEM history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We welcome contributions from STEM enthusiasts, historians, educators, and students. You can
                    contribute:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Blog articles about STEM pioneers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Educational resources for teachers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Video scripts and content ideas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Interactive learning materials</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Submit Content</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="ideas" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Submit Ideas</CardTitle>
                  <CardDescription>Help shape the future of STEMHiss with your creative ideas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Have ideas for improving our platform or suggestions for new content? We'd love to hear from you!
                  </p>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="idea-category">
                        Idea Category
                      </label>
                      <select
                        id="idea-category"
                        className="w-full p-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option>Content Suggestion</option>
                        <option>Website Improvement</option>
                        <option>Event Idea</option>
                        <option>Partnership Opportunity</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="idea-description">
                        Describe Your Idea
                      </label>
                      <textarea
                        id="idea-description"
                        placeholder="Share your thoughts..."
                        className="w-full p-2 min-h-[150px] border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      ></textarea>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Submit Idea</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

