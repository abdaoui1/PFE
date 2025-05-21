

import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";


export async function PUT(req: NextRequest) {

    const body = await req.json();
    const { idModule, nomModule, abrModule, dure, departement } = body;

    console.log("🟩what i recive " + body);

    const prisma = new PrismaClient();
    const newModule = await prisma.module.update({
        where: {
            idModule: idModule
        }, data: {
            idModule,
            nomModule,
            abrModule,
            departement,
            dure
        }
    })

    console.log("updated succes");
    console.log(newModule);

    return new Response(JSON.stringify({ message: "good" }), { status: 200 })


}