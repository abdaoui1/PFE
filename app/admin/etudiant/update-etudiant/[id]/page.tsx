'use server'

import UpdateEtudiantForm from "@/components/UpdateEtudiantPage";
import prisma from "@/lib/prisma";
import { Etudiant } from "@prisma/client";

export default async function getEtudiant({ params }: { params: { id: string } }) {

    const id = decodeURIComponent((await params).id);
    console.log("id = " + id);
    const Etudiant: Etudiant | null = await prisma.etudiant.findUnique({
        where: { emailEtd: id },
        
    })
    if (Etudiant === null) { console.log('etudiant not found!'); }
    console.log("nometd = " + Etudiant?.nomEtd);
    return (<UpdateEtudiantForm etudiant={Etudiant} />)
}