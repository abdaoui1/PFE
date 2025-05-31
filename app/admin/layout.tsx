import type { Metadata } from 'next'
import '@/app/globals.css'
import MainNav from '@/components/main-nav'
import { AdmniSideBar } from '@/components/admin_sidebar'
import Sidebar from '@/components/charSidebar'

export const metadata: Metadata = {
    title: 'v0 App',
    description: 'Created with v0',
    generator: 'v0.dev',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    {/* <MainNav /> */}
                </header>
                {/* < AdmniSideBar /> */}
                {/* < Sidebar /> */}
                {children}</body>
        </html>
    )
}
