

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

import { Classe, Filiere } from "@prisma/client";
import { createApiResponse, getErrorMessage } from "@/lib/utils";

export async function POST(req: NextRequest) {
    try {
        const body: Classe = await req.json();

        const { idFiliere , semestre  , section, groupe , effectif } = body;

        console.log("id Filiere "+ idFiliere);
        console.log(semestre); 
        console.log(section);
        console.log(groupe);
        console.log(effectif);

        const newClasse = await prisma.classe.create({
            data: {
                idFiliere,
                semestre,
                section,
                groupe,
                effectif,
            }
        })

        console.log("new Classe : "); console.log(newClasse);

        const response = createApiResponse(true, "good ", newClasse, null);

        return NextResponse.json(response, { status: 201 });

    } catch (error) {
        const response = createApiResponse(false, "Error creating Classe ", null, getErrorMessage(error))
        return NextResponse.json(response, { status: 500 });

    }
}


export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json();

        const idClasse = body.idClasse;

        const deletedClasse = await prisma.classe.delete({
            where: { idClasse }
        })

        console.log("Classe was deleted : "); console.log(deletedClasse);

        const response = createApiResponse(true, "good", deletedClasse, null)
        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        const response  = createApiResponse( false , "Error while deleting the classe " , null , getErrorMessage(error))
        
        return NextResponse.json(response , { status: 500 });
    }
}


export async function PUT(req: NextRequest) { // for update 

    try {
        const body: Classe = await req.json();

        const { idFiliere ,idClasse, semestre  , section, groupe , effectif } = body;

        console.log("id Filiere "+ idFiliere);
        console.log(semestre); 
        console.log(section);
        console.log(groupe);
        console.log(effectif);

        const newClasse = await prisma.classe.update({
            data: {
                idFiliere,
                semestre,
                section,
                groupe,
                effectif,
            }, where:{
                idClasse 
            }
        })

    console.log("updated succes");
    console.log(newClasse);
    const response = createApiResponse( true , "updated succes", newClasse , null)

    return NextResponse.json( response , {status: 200});
    } catch (error) {
        
        const response = createApiResponse(false , "Error" , null , getErrorMessage(error))
        return NextResponse.json( response , {status: 500})
    }
}

export async function GET() {

    try {

        const classes: (Classe & {filiere :Filiere} )[] = await prisma.classe.findMany({
            include:{
                filiere:true,
            }
        });

        console.log("read all classe : good ");

        const response = createApiResponse(true , "good" , classes )
        return NextResponse.json( response, { status: 200 })

    } catch (error) {
        console.error("Error geting classes : " + error);
        const response = createApiResponse(false , "Error geting classes : " , null , getErrorMessage(error))

        return NextResponse.json(response, { status: 500 });
    }
}