

import Link from "next/link"

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {


    return (
        <html lang="en">
            <body>

                <div className="flex items-center bg-blue-400 py-3 justify-items-center">
                    <nav>
                        <Link className="p-3"
                            href={`/admin/prof/create-prof/`}>
                            create-prof
                        </Link>
                        <Link className="p-3"
                            href={`/admin/prof/liste-prof/`}>
                            liste-prof
                        </Link>
                        <Link className="p-3"
                            href={`/admin/prof/update-prof/5`}>
                            update-prof
                        </Link>
                    </nav>
                </div>
                {children}
            </body>
        </html>
    )
}