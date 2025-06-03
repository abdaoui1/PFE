

import Link from "next/link"

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {


    return (
            <div>

                <div className="flex items-center bg-green-400 py-3 justify-items-center">
                    <nav>
                        <Link className="p-3"
                            href={`/admin/lieu/create-lieu/`}>
                            create-lieu
                        </Link>
                        <Link   className="p-3"
                            href={`/admin/lieu/liste-lieu/`}>
                            liste-lieu
                        </Link>
                        <Link className="p-3"
                            href={`/admin/lieu/update-lieu/5`}>
                            update-lieu
                        </Link>
                    </nav>
                </div>
                {children}
            </div>
    )
}