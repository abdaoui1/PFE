
import {  Filiere} from "@prisma/client";

import prisma from "@/lib/prisma";
import { createApiResponse  , getErrorMessage } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";


export async function GET (req : NextRequest)  {

    try {
        const liste_filiere = await prisma.filiere.findMany();
    
        const res = createApiResponse<Filiere[]> (true , "good " , liste_filiere);
        return NextResponse.json( res , {status: 200})
        
    } catch (error) {
        const res = createApiResponse (false , "error " , null , getErrorMessage(error) )
    }

}