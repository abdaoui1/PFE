'use server'

import UpdateModuleForm from "@/components/UpdateModulePage";
import { PrismaClient } from "@prisma/client"

export default async function getModule({ params }: { params: { id: string } }) {

    const id = parseInt((await params)?.id);
    const prisma = new PrismaClient();
    const module = await prisma.module.findUnique({
        where: { idModule: id }
    })

    return (<UpdateModuleForm module={module} />)
}