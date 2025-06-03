import type { Metadata } from 'next'
import '@/app/globals.css'
import SideNav from '@/components/sideNav'
import ContextProvider from '../providers'

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
                    {/* {/* <MainNav /> } */}
                </header>
                <div className="flex">
                    <SideNav />
                    <div className="w-full overflow-x-auto">
                        <div className="h-screen sm:h-[calc(100vh-60px)] overflow-y-auto">
                            <div className="w-full flex justify-center h-full">
                                <div className="w-full md:max-w-6xl px-4">
                                    <ContextProvider>
                                        {children}
                                        </ContextProvider> 
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <AdminSideBar>
                    <div className="w-full overflow-x-auto">
                        <div className="sm:h-[calc(99vh-60px)] overflow-auto ">
                            <div className="w-full flex justify-center mx-auto   overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                                <div className="w-full md:max-w-6xl">{children}</div>
                            </div>
                        </div>
                    </div>
                     {children} 
                </AdminSideBar> */}

            </body>
        </html>
    )
}
