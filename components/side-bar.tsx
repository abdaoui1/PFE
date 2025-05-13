"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Calendar, Clock, HelpCircle, Home, Layers, Menu, User } from "lucide-react";
import Link from "next/link";
import { MenuItem } from "./main-nav";


const iconMap = { Home, Calendar, Clock, Layers, User };

export default function SideBar({ menuItems }: { menuItems: MenuItem[] }) {

    const [isOpen, setIsOpen] = useState(false);    

    return (<Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col gap-6 py-6">
                {menuItems.map((item) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap] || HelpCircle;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-2 text-sm font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            <Icon className="h-5 w-5" />
                            {item.name}
                        </Link>
                    )
                })}
                <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
            </div>
        </SheetContent>
    </Sheet>);
}