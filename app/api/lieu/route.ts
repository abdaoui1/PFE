

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

import { ApiResponse, Lieu } from "@/lib/types";
import { createApiResponse, getErrorMessage } from "@/lib/utils";

export async function POST(req: NextRequest) {
    try {
        const body: Lieu = await req.json();

        

        const newLieu = await prisma.lieu.create({
            data: {
                nomLieu: body?.nomLieu,
                bloc: body?.bloc,
                capacite: body?.capacite,
                etat: body?.etat,
                numeroSalle: body?.numeroSalle,
                typeLieu: body?.typeLieu
            }
        })

        console.log("new Lieu : "); console.log(newLieu);

        const response = createApiResponse(true, "good ", newLieu, null);

        return NextResponse.json(response, { status: 201 });

    } catch (error) {
        const response = createApiResponse(false, "Error creating Lieu ", null, getErrorMessage(error))
        return NextResponse.json(response, { status: 500 });

    }
}


// export async function DELETE(req: NextRequest) {
//     try {
//         const body = await req.json();

//         const idLieu = body.idLieu;

//         const deletedLieu = await prisma.lieu.delete({
//             where: { idLieu }
//         })

//         console.log("Lieu was deleted : "); console.log(deletedLieu);

//         const response = createApiResponse(true, "good", deletedLieu, null)
//         return NextResponse.json(response, { status: 200 });

//     } catch (error) {
//         const response  = createApiResponse( false , "Error while deleting the lieu " , null , getErrorMessage(error))
        
//         return NextResponse.json(response , { status: 500 });
//     }
// }


export async function PUT(req: NextRequest) { // for update 

    try {
        
    const body: Lieu = await req.json();

    const newLieu = await prisma.lieu.update({
        where: {
            idLieu: body.idLieu
        },  data: {
                idLieu: body.idLieu,
                nomLieu: body.nomLieu,
                bloc: body.bloc,
                capacite: body.capacite,
                etat: body.etat,
                numeroSalle: body.numeroSalle,
                typeLieu: body.typeLieu
            }
    })

    console.log("updated succes");
    console.log(newLieu);
    const response = createApiResponse( true , "updated succes", newLieu , null)

    return NextResponse.json( response , {status: 200});
    } catch (error) {
        
        const response = createApiResponse(false , "Error" , null , getErrorMessage(error))
        return NextResponse.json( response , {status: 500})
    }
}

export async function GET() {

    try {

        const lieux: Lieu[] = await prisma.lieu.findMany();

        console.log("read all lieux : good ");

        const response = createApiResponse(true , "good" , lieux )
        return NextResponse.json( response, { status: 200 })

    } catch (error) {
        console.error("Error geting lieux : " + error);
        const response = createApiResponse(false , "Error geting lieux : " , null , getErrorMessage(error))

        return NextResponse.json(response, { status: 500 });
    }
}