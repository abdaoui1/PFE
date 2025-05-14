import { Clock, CalendarCheck2 , FileSpreadsheet, Layers } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import HeroCarousel from "@/components/hero-carousel"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        {/* <section className="w-full">
          <div className="container py-4 md:py-6">
            <h2 className="text-center text-2xl font-medium text-blue-600 md:text-3xl">
              Welcome to Faculty Timetable Manager
            </h2>
          </div>
          <HeroCarousel />
        </section> */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What You Can Do</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Manage your academic schedule with ease using our comprehensive timetable system.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-8">
              <Card className="flex flex-col items-center text-center shadow-md transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                    {/* <FileSpreadsheet className="h-10 w-10 text-blue-600" /> */}
                    <CalendarCheck2 />
                    
                  </div>
                  <CardTitle className="mt-4">Import Timetables</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Upload CSV/Excel files or connect to external calendars to import your schedule.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center shadow-md transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                    <Clock className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="mt-4">View Session Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Open a session profile to see date, time, location, and instructor information.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center shadow-md transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                    <Layers className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="mt-4">Explore Module Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Browse modules, prerequisites, and see a list of enrolled students.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
