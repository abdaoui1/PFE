'use server'

import UpdateClasseForm from "@/components/UpdateClassePage";
import prisma from "@/lib/prisma";
import { Classe } from "@prisma/client";

export default async function getClasse({ params }: { params: { id: string } }) {

    const id = parseInt(params.id);

    const Classe: Classe | null = await prisma.classe.findUnique({
        where: { idClasse: id }
    })

    return (<UpdateClasseForm classe={Classe} />)
}