

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

import { ApiResponse, Module } from "@/lib/types";
import { createApiResponse, getErrorMessage } from "@/lib/utils";

export async function POST(req: NextRequest) {
    try {
        const body: Module = await req.json();

        const { nomModule, abrModule, departement, dure } = body;

        const newModule = await prisma.module.create({
            data: {
                nomModule,
                abrModule,
                departement,
                dure,
            }
        })

        console.log("new Module : "); console.log(newModule);

        const response = createApiResponse(true, "good ", newModule, null);

        return NextResponse.json(response, { status: 201 });

    } catch (error) {
        const response = createApiResponse(false, "Error creating Module ", null, getErrorMessage(error))
        return NextResponse.json(response, { status: 500 });

    }
}


export async function DELETE(req: NextRequest) {

    try {

        const body = await req.json();

        const idModule = body.idModule;

        const deletedModule = await prisma.module.delete({
            where: { idModule }
        })

        console.log("Module was deleted : "); console.log(deletedModule);

        const response = createApiResponse(true, "good", deletedModule, null)
        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        const response = createApiResponse(false, "Error while deleting the module ", null, getErrorMessage(error))

        return NextResponse.json(response, { status: 500 });
    }
}


export async function PUT(req: NextRequest) { // for update 

    try {

        const body = await req.json();
        const { idModule, nomModule, abrModule, dure, departement } = body;

        console.log("🟩what i recive " + body);


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
        const response = createApiResponse(true, "updated succes", newModule, null)

        return NextResponse.json(response, { status: 200 });
    } catch (error) {

        const response = createApiResponse(false, "Error", null, getErrorMessage(error))
        return NextResponse.json(response, { status: 500 })
    }
}

// export async function GET() {

//     try {

//         const modules: Module[] = await prisma.module.findMany();

//         console.log("read all module : good ");

//         const response = createApiResponse(true, "good", modules)
//         return NextResponse.json(response, { status: 200 })

//     } catch (error) {
//         console.error("Error geting modules : " + error);
//         const response = createApiResponse(false, "Error geting modules : ", null, getErrorMessage(error))

//         return NextResponse.json(response, { status: 500 });
//     }



    // Add `req: NextRequest` as parameter to read URL
    export async function GET(req: NextRequest) {  // <-- MODIFIED: added req parameter

        try {
            // Get query parameters from URL
            const { searchParams } = new URL(req.url);               // <-- ADDED
            const type = searchParams.get('type');                    // <-- ADDED

            let modules;

            // Check if type=summary, select only id and nomMod
            if (type === 'summary') {                                 // <-- ADDED
                modules = await prisma.module.findMany({              // <-- MODIFIED: use select
                    select: {
                        idModule: true,
                        nomModule: true,
                    },
                });
            } else {
                modules = await prisma.module.findMany();              // <-- ORIGINAL code kept
            }

            console.log("read modules: good");                         // <-- MODIFIED: message changed for clarity

            const response = createApiResponse(true, "good", modules);
            return NextResponse.json(response, { status: 200 });

        } catch (error) {
            console.error("Error getting modules: " + error);          // <-- MODIFIED: fixed typo "geting" -> "getting"
            const response = createApiResponse(false, "Error getting modules", null, getErrorMessage(error));
            return NextResponse.json(response, { status: 500 });
        }
    }
