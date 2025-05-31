

import Link from "next/link"

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {


    return (
        <html lang="en">
            <body>

                <div className="flex items-center bg-blue-400 py-3 justify-items-center">
                    <nav>
                        <Link className="p-3"
                            href={`/admin/user/create-user/`}>
                            create-user
                        </Link>
                        <Link className="p-3"
                            href={`/admin/user/liste-prof/`}>
                            liste-prof
                        </Link>
                        <Link className="p-3"
                            href={`/admin/user/update-user/5`}>
                            update-user
                        </Link>
                    </nav>
                </div>
                {children}
            </body>
        </html>
    )
}