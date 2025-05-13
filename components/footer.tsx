import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, HelpCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="container grid gap-8 px-4 py-10 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Faculty Timetable Manager</h3>
          <p className="text-sm text-gray-500">Simplifying academic scheduling for faculty and students.</p>
          <div className="mt-4 flex space-x-4">
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Home
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Import Timetables
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Sessions
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Modules
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Profile
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Support</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              <span className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Help Center
              </span>
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              FAQs
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Contact</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="mailto:support@facultytimetable.edu"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600"
            >
              <Mail className="h-4 w-4" />
              support@facultytimetable.edu
            </Link>
            <Link href="tel:+1234567890" className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600">
              <Phone className="h-4 w-4" />
              +1 (234) 567-890
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t bg-gray-100 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Faculty Timetable Manager. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-xs text-gray-500 hover:text-blue-600">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-blue-600">
              Terms
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-blue-600">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
