'use client'

import Link from "next/link";
import { getBaseUrl } from "@/lib/utils";
import { ApiResponse, Filiere , Module, Lieu , TypeEntity} from "@/lib/types";

import { useRouter } from "next/navigation";


export function DeleteLink(props: { content: string, id: number , typeEntity: TypeEntity }) {
    const router = useRouter();

    async function handleDelete(e: React.MouseEvent, id: number , typeEntity: TypeEntity ) {
        e.preventDefault();

        const pathApi = `${getBaseUrl()}/api/`+((typeEntity!=='module')?typeEntity: 'module-fac') ;
        // because i want name it , module , probably it is a reserved name .
        
        const res = await fetch( `${getBaseUrl()}/api/delete`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id ,
                typeEntity
            })
        });

        const body : ApiResponse<Module | Filiere| Lieu > = await res.json();

        if (body.success && body.data) {
            alert(`🟩 ${typeEntity} deleted successfuly `);
            router.refresh();
        } else {
            alert(`Error: ${body?.error}  \n${body.message} `)
        }
    }

    return (
        <button
            
            onClick={(e) => handleDelete(e, props.id , props.typeEntity)}>{props.content}
        </button>
    )
}