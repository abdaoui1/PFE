'use server'

import UpdateProfForm from "@/components/UpdateProfPage";
import prisma from "@/lib/prisma";
import { Prof } from "@prisma/client";

export default async function getProf({ params }: { params: { id: string } }) {

    const id = parseInt( (await params).id);

    const Prof: Prof | null = await prisma.prof.findUnique({
        where: { idProf: id }
    })

    return (<UpdateProfForm prof={Prof} />)
}