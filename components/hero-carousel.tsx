"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const carouselItems = [
  {
    id: 1,
    title: "New Semester Registration Open",
    description: "Register for your courses before the deadline on September 15th.",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    id: 2,
    title: "Faculty Training Sessions",
    description: "Join our training sessions to learn how to use the new timetable system.",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    id: 3,
    title: "Exam Schedule Released",
    description: "Check your exam schedule for the upcoming semester.",
    image: "/placeholder.svg?height=600&width=1200",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[300px] w-full overflow-hidden sm:h-[400px] md:h-[500px]" aria-live="polite">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-500",
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
              <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">{item.title}</h2>
              <p className="mt-4 max-w-xl text-lg md:text-xl">{item.description}</p>
              <Button className="mt-6 bg-blue-600 text-white hover:bg-blue-700">Learn More</Button>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white/80 text-gray-800 backdrop-blur hover:bg-white"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-white/80 text-gray-800 backdrop-blur hover:bg-white"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === currentSlide ? "w-6 bg-blue-600" : "bg-white/60",
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}
