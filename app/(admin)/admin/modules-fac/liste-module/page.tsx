import prisma from "@/lib/prisma"
import { PrismaClient } from "@prisma/client";

type module ={
    idModule: number,
    nomModule: string
    abrModule: string
    dure: number 
    departement: string | null
}

export default async function Module() {

    const prisma = new PrismaClient();

    const modules: module[]=  await prisma.module.findMany();
    console.log(modules);


    return (
        
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Nom </th>
                    <th>Abreviation</th>
                    <th>Departement</th>
                    <th>Dure</th>
                </thead>
                {modules.map( (module: module ) => (
                    <tr>
                        <td>{module.idModule}</td>
                        <td>{module.nomModule}</td>
                        <td>{module.abrModule}</td>
                        <td>{module.departement}</td>
                        <td>{module.dure}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}