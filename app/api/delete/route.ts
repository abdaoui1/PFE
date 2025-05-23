
import { NextRequest , NextResponse } from "next/server";
import { createApiResponse , getErrorMessage} from "@/lib/utils";
import prisma from "@/lib/prisma";
import { TypeEntity } from "@/lib/types";

export async function DELETE(req: NextRequest) {
    try {
        const body: {id: number , typeEntity: TypeEntity} = await req.json();

        let deletedEntity = null ;
        
        if ( body.typeEntity === 'filiere') {
             deletedEntity = await prisma.filiere.delete({
                where: { idFiliere:body.id }
            })
            
        } else if ( body.typeEntity === 'module' ) {
              deletedEntity = await prisma.module.delete({
                where: { idModule:body.id }
            })
            
        } else if( body.typeEntity === 'lieu') {
              deletedEntity = await prisma.lieu.delete({
                where: { idLieu:body.id }
            })
            
        } 
        


        console.log("Entity  deleted : "); console.log(deletedEntity);

        const response = createApiResponse(true, "good", deletedEntity, null)
        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        const response  = createApiResponse( false , `Error while deleting  ` , null , getErrorMessage(error))
        
        return NextResponse.json(response , { status: 500 });
    }
}