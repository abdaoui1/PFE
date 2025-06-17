

import Link from "next/link"

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {


    return (
            <div>

                <nav>
                    <div className="flex items-center bg-blue-400  justify-items-center">
                        <Link className="p-3"
                            href={`/admin/classe/create-classe/`}>
                            create-classe
                        </Link>
                        <Link className="p-3"
                            href={`/admin/classe/liste-classe/`}>
                            liste-classe
                        </Link>
                        <Link className="p-3"
                            href={`/admin/classe/update-classe/5`}>
                            update-classe
                        </Link>
                    </div>
                </nav>
                <main>
                    {children}
                </main>
            </div>
    )
}