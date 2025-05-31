"use server"

import prisma from "./prisma";


export async function getUser(email:string) {
    return await prisma.user.findUnique({
        where: {
          email: email,
        },
        select: {
          // userId: true,

          password:true,          
          email: true,

          // image:true,                    
        },
      });
      
}