'use server'

import UpdateLieuForm from "@/components/UpdateLieuPage";
import prisma from "@/lib/prisma";
import { Lieu } from "@/lib/types";

export default async function getLieu({ params }: { params: { id: string } }) {

    const id = parseInt((await params)?.id);
    
    const lieu: Lieu | null = await prisma.lieu.findUnique({
        where: { idLieu: id }
    })

    return (<UpdateLieuForm lieu={lieu} />)
}