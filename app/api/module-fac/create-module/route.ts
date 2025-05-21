

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type dataModule = {
    nomModule: string,
    abrModule: string,
    departement : string | null ,
    dure : number
}

export async function PUT ( req: NextRequest) {
   
    try {
         const body : dataModule= await req.json();

    const {nomModule , abrModule , departement , dure } = body ;

    const newModule= await prisma.module.create({
        data: {
            nomModule,
            abrModule,
            departement,
            dure,
        }
    })
    
    console.log("new Module : ");   console.log(newModule);

    return  NextResponse.json( {success:true , module:newModule } , {status:201});

    } catch (error) {
        console.error("Error creating Module "+error);
        return NextResponse.json ( { success: false  } , {status: 500});
        
    }

}