

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

import {  Filiere } from "@/lib/types";
import { createApiResponse, getErrorMessage } from "@/lib/utils";

export async function POST(req: NextRequest) {
    try {
        const body: Filiere = await req.json();

        const { nomFiliere, abrFiliere,   } = body;

        const newFiliere = await prisma.filiere.create({
            data: {
                nomFiliere,
                abrFiliere,
            }
        })

        console.log("new Filiere : "); console.log(newFiliere);

        const response = createApiResponse(true, "good ", newFiliere, null);

        return NextResponse.json(response, { status: 201 });

    } catch (error) {
        const response = createApiResponse(false, "Error creating Filiere ", null, getErrorMessage(error))
        return NextResponse.json(response, { status: 500 });

    }
}


// export async function DELETE(req: NextRequest) {
//     try {
//         const body = await req.json();

//         const idFiliere = body.idFiliere;

//         const deletedFiliere = await prisma.filiere.delete({
//             where: { idFiliere }
//         })

//         console.log("Filiere was deleted : "); console.log(deletedFiliere);

//         const response = createApiResponse(true, "good", deletedFiliere, null)
//         return NextResponse.json(response, { status: 200 });

//     } catch (error) {
//         const response  = createApiResponse( false , "Error while deleting the filiere " , null , getErrorMessage(error))
        
//         return NextResponse.json(response , { status: 500 });
//     }
// }


export async function PUT(req: NextRequest) { // for update 

    try {
        
    const body = await req.json();
    const { idFiliere, nomFiliere, abrFiliere } = body;

    console.log("🟩what i recive " + body);


    const newFiliere = await prisma.filiere.update({
        where: {
            idFiliere: idFiliere
        }, data: {
            idFiliere,
            nomFiliere,
            abrFiliere,
        }
    })

    console.log("updated succes");
    console.log(newFiliere);
    const response = createApiResponse( true , "updated succes", newFiliere , null)

    return NextResponse.json( response , {status: 200});
    } catch (error) {
        
        const response = createApiResponse(false , "Error" , null , getErrorMessage(error))
        return NextResponse.json( response , {status: 500})
    }
}

export async function GET() {

    try {

        const filieres: Filiere[] = await prisma.filiere.findMany();

        console.log("read all filiere : good ");

        const response = createApiResponse(true , "good" , filieres )
        return NextResponse.json( response, { status: 200 })

    } catch (error) {
        console.error("Error geting filieres : " + error);
        const response = createApiResponse(false , "Error geting filieres : " , null , getErrorMessage(error))

        return NextResponse.json(response, { status: 500 });
    }
}