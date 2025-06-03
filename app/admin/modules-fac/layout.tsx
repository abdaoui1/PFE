

import Link from "next/link"

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {


    return (
            <div>

                <div className="flex items-center bg-blue-400 py-3 justify-items-center">
                    <nav>
                        <Link className="p-3"
                            href={`/admin/modules-fac/create-module/`}>
                            create-module
                        </Link>
                        <Link   className="p-3"
                            href={`/admin/modules-fac/liste-module/`}>
                            liste-module
                        </Link>
                        <Link className="p-3"
                            href={`/admin/modules-fac/update-module/20`}>
                            update-module
                        </Link>
                    </nav>
                </div>
                {children}
            </div>
    )
}