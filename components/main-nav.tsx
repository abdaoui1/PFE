import Link from "next/link"
import Image from "next/image"
import Profile from "./profile"
import Logout from "./logout"
import Sidebar from "@/components/side-bar"
import {ThemeToggle} from "@/components/theme-toggle"

export type MenuItem = {
  name: string;
  href: string;
  icon: string;
};

export default function MainNav() {

  const menuItems: MenuItem[] = [
    { name: "Acceuil", href: "/", icon: "Home" },
    { name: "Emplois du Temps", href: "/emplois-temps", icon: "Calendar" },
    { name: "Modules", href: "/modules", icon: "Layers" },
  ]

  return (
    <div className="container flex h-16 items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/fs.jpg" alt="Logo de FS El Jadida" width={0} height={0} className="h-14 w-14" />
          <span className="hidden font-bold sm:inline-block">Faculte des Sciences El Jadida</span>
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
        {/* <Logout /> */}
        <ThemeToggle isDropDown={true}/>
        <Profile />
        <Sidebar menuItems={menuItems} />
      </div>
    </div>
  )
}

