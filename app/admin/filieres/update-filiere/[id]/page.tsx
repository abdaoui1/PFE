'use server'

import UpdateFiliereForm from "@/components/UpdateFilierePage";
import prisma from "@/lib/prisma";
import { Filiere } from "@/lib/types";

export default async function getFiliere({ params }: { params: { id: string } }) {

    const id = parseInt((await params)?.id);
    
    const filiere: Filiere | null = await prisma.filiere.findUnique({
        where: { idFiliere: id }
    })

    return (<UpdateFiliereForm filiere={filiere} />)
}