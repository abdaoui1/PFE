import { Microscope, CalendarArrowDown, LibraryBig } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import HeroCarousel from "@/components/hero-carousel"
import Footer from "@/components/footer"
import { ConsulterEmploisCard } from "@/components/Cards/ConsulterEmplois"
import Link from "next/link"

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
                <h2 className="text-center text-lg font-semibold sm:text-2xl md:text-3xl tracking-tight">
                  {/* Tout ce dont vous avez besoin : */}
                  emploi du temps, modules, séances, notifications et documents<br /> en un seul endroit.
                </h2>

                {/* <h2 className=" font-bold tracking-tighter text-base sm:text-sm md:text-xl">
                  Tout ce dont vous avez besoin : <br/>emploi du temps, modules, séances ,notifications et documents <br/> en un seul endroit.</h2> */}

              </div>
            </div>

            < ConsulterEmploisCard />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-8">
              <Card className="flex flex-col items-center text-center shadow-md transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-blue-100">
                    {/* <FileSpreadsheet className="h-10 w-10 text-blue-600" /> */}
                    {/* <CalendarCheck2 /> */}
                    <CalendarArrowDown className="h-10 w-10 text-blue-600" />

                  </div>
                  <CardTitle className="mt-4">
                    <Link href="/" className="link link-info">
                      Exporter
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Un clic suffit pour obtenir votre planning complet, prêt à imprimer ou partager !
                  </CardDescription>
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </CardContent>
              </Card>

              <Card className="flex flex-col items-center text-center shadow-md transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-blue-100">
                    <Microscope className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="mt-4">Details des&nbsp;
                    <Link href="/" className="link link-info">
                      Seances
                    </Link></CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Tout savoir avant la seance : contenu, devoirs, fichiers à lire. directives du prof ... <br />tout est dans le profil de la séance.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="flex flex-col items-center text-center shadow-md transition-all hover:shadow-lg">
                <CardHeader>

                  <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-blue-100">
                    {/* <Layers /> */}
                    <LibraryBig className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="mt-4">Profil des&nbsp;
                    <Link href="/" className="link link-info">
                      Modules
                    </Link></CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Accédez à toutes les informations clés d'un module en un seul endroit :
                    description, prérequis, planning des cours, TD, TP et Examens...
                    Ne perdez plus de temps sur plusieurs plateformes et gérez votre module efficacement !
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
