'use server'

import UpdateModuleForm from "@/components/UpdateModulePage";
import prisma from "@/lib/prisma";
import { Module } from "@/lib/types";

export default async function getModule({ params }: { params: { id: string } }) {

    const id = parseInt((await params)?.id);
    
    const module: Module | null= await prisma.module.findUnique({
        where: { idModule: id }
    })

    return (<UpdateModuleForm module={module} />)
}