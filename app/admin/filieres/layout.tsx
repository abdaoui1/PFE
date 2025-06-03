

import Link from "next/link"

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {


    return (
            <div>

                <div className="flex items-center bg-blue-400 py-3 justify-items-center">
                    <nav>
                        <Link className="p-3"
                            href={`/admin/filieres/create-filiere/`}>
                            create-filiere
                        </Link>
                        <Link   className="p-3"
                            href={`/admin/filieres/liste-filiere/`}>
                            liste-filiere
                        </Link>
                        <Link className="p-3"
                            href={`/admin/filieres/update-filiere/5`}>
                            update-filiere
                        </Link>
                    </nav>
                </div>
                {children}
            </div>
    )
}