

import Link from "next/link"

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {


    return (
        <html lang="en">
            <body>

                <div className="flex items-center bg-blue-400 py-3 justify-items-center">
                    <nav>
                        <Link className="p-3"
                            href={`/admin/etudiant/create-etudiant/`}>
                            create-etudiant
                        </Link>
                        <Link className="p-3"
                            href={`/admin/etudiant/liste-etudiant/`}>
                            liste-etudiant
                        </Link>
                        <Link className="p-3"
                            href={`/admin/etudiant/update-etudiant/5`}>
                            update-etudiant
                        </Link>
                    </nav>
                </div>
                {children}
            </body>
        </html>
    )
}