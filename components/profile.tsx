

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Profile() {

    const session = await getServerSession(authOptions);


    if (!session?.user)
        return (<Link href="/login" className="hidden bg-blue-600 text-white hover:bg-blue-700 lg:flex">Connexion</Link>);

    console.log(session.user)
    return (
        <Link href="/login" className="hidden bg-blue-600 text-white hover:bg-blue-700 lg:flex">{session.user.email || "Anonymous"}</Link>
    );
}