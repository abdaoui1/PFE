"use client"

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function ResponsiveSidebar() {
    const [isLarge, setIsLarge] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    // Detect screen size
    useEffect(() => {
        const handleResize = () => setIsLarge(window.innerWidth >= 1024)
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <>
            {/* Toggle button: Always shown */}
            <div className="lg:hidden p-2">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline">☰ Menu</Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[250px]">
                        <SidebarContent />
                    </SheetContent>
                </Sheet>
            </div>

            {/* Static Sidebar for lg screens */}
            {isLarge && (
                <aside className="hidden lg:flex flex-col w-[250px] h-screen bg-muted p-4">
                    <SidebarContent />
                </aside>
            )}
        </>
    )
}

function SidebarContent() {
    return (
        <>
            <SheetHeader>
                <SheetTitle className="text-xl">phpMyAdmin</SheetTitle>
            </SheetHeader>
            <ul className="mt-6 space-y-3 text-sm">
                <li><a href="#" className="hover:underline">Dashboard</a></li>
                <li><a href="#" className="hover:underline">Databases</a></li>
                <li><a href="#" className="hover:underline">Users</a></li>
                <li><a href="#" className="hover:underline">Settings</a></li>
            </ul>
        </>
    )
}
