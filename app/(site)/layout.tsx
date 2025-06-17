import type { Metadata } from 'next'
import '@/app/globals.css'
import MainNav from '@/components/main-nav'
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
    <html lang="en" className='' suppressHydrationWarning>
      <body>
        <ContextProvider>
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <MainNav />
          </header>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
