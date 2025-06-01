
import { NextRequest, NextResponse } from "next/server";
import { createApiResponse, getErrorMessage } from "@/lib/utils";
import prisma from "@/lib/prisma";
import { TypeEntity } from "@/lib/types";

export async function DELETE(req: NextRequest) {
    try {
        const body: { id: number|string, typeEntity: TypeEntity } = await req.json();

        let deletedEntity = null;

        switch (body.typeEntity) {
            case 'filiere':
                deletedEntity = await prisma.filiere.delete({
                    where: { idFiliere: body.id as number}
                })
                break;
            case 'module':
                deletedEntity = await prisma.module.delete({
                    where: { idModule: body.id as number }
                })
                break;
            case 'lieu':
                deletedEntity = await prisma.lieu.delete({
                    where: { idLieu: body.id as number }
                })
                break;
            case 'classe':
                deletedEntity = await prisma.classe.delete({
                    where: { idClasse: body.id as number }
                })
                break;
            case 'prof':
                deletedEntity = await prisma.prof.delete({
                    where: { idProf: body.id as number }
                });
                break;
            case 'etudiant':
                deletedEntity = await prisma.etudiant.delete({
                    where: { emailEtd: body.id as string }
                })
                break;
            default: ;
        }


        console.log("Entity  deleted : "); console.log(deletedEntity);

        const response = createApiResponse(true, "good", deletedEntity, null)
        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        const response = createApiResponse(false, `Error while deleting  `, null, getErrorMessage(error))

        return NextResponse.json(response, { status: 500 });
    }
}