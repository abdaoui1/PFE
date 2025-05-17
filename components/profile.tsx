

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "./logout";

export default async function Profile() {

    const session = await getServerSession(authOptions);


    if (!session?.user)
        return (
            <Link href="/login" className="hidden p-3 bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 rounded-lg transition-all duration-300 lg:flex">
                Se Connecter
            </Link>);

    // console.log(session.user)
    return (

        <div className="dropdown dropdown-end">
            {/* <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div> */}
            <div tabIndex={0} role="button" className="avatar rounded-full cursor-pointer border-2 border-blue-500 ">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                        src={session?.user?.image || "/avatars/placeholder.svg"}
                        // src="/avatars/placeholder.svg"
                        alt="logo"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                    />
                </div>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-primary text-onPrimary rounded-box z-[1] w-52 p-2 shadow-sm">
                
                <li className="bg-primary text-red-500"><Logout /></li>
            </ul>
        </div>



    );
}