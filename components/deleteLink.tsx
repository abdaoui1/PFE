'use client'

import Link from "next/link";
import { getBaseUrl } from "@/lib/utils";
import { ApiResponse , Module} from "@/lib/types";

import { useRouter } from "next/navigation";


export function DeleteLink(props:  { content: string , idModule: number}) {
    const router = useRouter();

    async function handleDelete(e: React.MouseEvent, idModule: number) {
        e.preventDefault();
        const res = await fetch(`${getBaseUrl()}/api/module-fac`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                idModule
            })
        });
        
        const body: ApiResponse<Module> = await res.json();
        if (body.success && body.data) {
            alert(`🟩 module deleted successfuly : id :${body.data.idModule}
                \n name: ${body.data.nomModule}`);
                router.refresh();
        } else {
            alert(`Error: ${body?.error}  \n${body.message} `)
        }
    }

    return (
        <Link
            href={`#`}
            onClick={(e) => handleDelete(e, props.idModule)}>{props.content}</Link>
    )
}