import Link from "next/link"
import Image from "next/image"
import Profile from "./profile"
import Sidebar from "@/components/side-bar"

export type MenuItem = {
  name: string;
  href: string;
  icon: string;
};

export default function MainNav() {

  const menuItems: MenuItem[] = [
    { name: "Home", href: "/", icon: "Home" },
    { name: "Import", href: "/import", icon: "Calendar" },
    { name: "Sessions", href: "/sessions", icon: "Clock" },
    { name: "Modules", href: "/modules", icon: "Layers" },
    { name: "Profile", href: "/profile", icon: "User" },
  ]

  return (
    <div className="container flex h-16 items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/fjj" alt="Logo" width={32} height={32} className="h-8 w-8" />
          <span className="hidden font-bold sm:inline-block">Faculty Timetable Manager</span>
        </Link>
      </div>
      <div className="hidden lg:flex">
        <nav className="flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Profile />
        <Sidebar menuItems={menuItems} />
      </div>
    </div>
  )
}

// function Clock(props: {}) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <polyline points="12 6 12 12 16 14" />
//     </svg>
//   )
// }
