

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

import { Prof, Sexe } from "@prisma/client";
import { createApiResponse, getErrorMessage } from "@/lib/utils";

type Type_User = 'etudiant' | 'prof' | 'admin' | '';

type dataProf = {
    nom: string, prenom: string, sexe: Sexe, numTele: string,
    email: string, password: string, typeUser: Type_User
};

type dataStudent = dataProf & { cne: string, idClasse: number };



export async function POST(req: NextRequest) {
    try {
        const body: dataProf & dataStudent = await req.json();

        const { nom, prenom, sexe, numTele, email, password, typeUser } = body;


        console.log("1nom=" + nom);
        console.log("2prenom=" + prenom);
        console.log("3sexe=" + sexe);
        console.log("4numtele=" + numTele);
        console.log("5email=" + email);
        console.log("6password=" + password);
        console.log("7 its a : typeUser = " + typeUser);
        if (typeUser === 'etudiant') {
            const { cne, idClasse } = body;
            console.log("its a student");
            console.log("7cne=" + cne);
            console.log("8idclasse=" + idClasse);
            const newStudent = await prisma.user.create({
                data: {
                    email,
                    password,
                    typeUser: 'ETUDIANT',
                    etudiant: {
                        create: {
                            cne,
                            nomEtd: nom,
                            prenomEtd: prenom,
                            sexeEtd: sexe,
                            teleEtd: numTele,
                            idClasse,
                        }
                    }
                }
            })

            console.log("new Student : "); console.log(newStudent);

            const response = createApiResponse(true, "good ", newStudent, null);

            return NextResponse.json(response, { status: 201 });
        } else if (typeUser === 'prof') {

            const newProf = await prisma.user.create({
                data: {
                    email,
                    password,
                    typeUser: 'PROF',
                    prof: {
                        create: {
                            nomProf: nom,
                            prenomProf: prenom,
                            sexeProf: sexe,
                            teleProf: numTele,
                        }
                    }
                }
            })

            console.log("new Student : "); console.log(newProf);

            const response = createApiResponse(true, "good ", newProf, null);

            return NextResponse.json(response, { status: 201 });
        }

    } catch (error) {
        const response = createApiResponse(false, "Error creating user ", null, getErrorMessage(error))
        return NextResponse.json(response, { status: 500 });
    }
}


// export async function DELETE(req: NextRequest) {
//     try {
//         const body = await req.json();

//         const idProf = body.idProf;

//         const deletedProf = await prisma.prof.delete({
//             where: { idProf }
//         })

//         console.log("Prof was deleted : "); console.log(deletedProf);

//         const response = createApiResponse(true, "good", deletedProf, null)
//         return NextResponse.json(response, { status: 200 });

//     } catch (error) {
//         const response  = createApiResponse( false , "Error while deleting the prof " , null , getErrorMessage(error))

//         return NextResponse.json(response , { status: 500 });
//     }
// }


// export async function PUT(req: NextRequest) { // for update 

//     try {
//         const body: Prof = await req.json();

//         const { idFiliere ,idProf, semestre  , section, groupe , effectif } = body;

//         console.log("id Filiere "+ idFiliere);
//         console.log(semestre); 
//         console.log(section);
//         console.log(groupe);
//         console.log(effectif);

//         const newProf = await prisma.prof.update({
//             data: {
//                 idFiliere,
//                 semestre,
//                 section,
//                 groupe,
//                 effectif,
//             }, where:{
//                 idProf 
//             }
//         })

//     console.log("updated succes");
//     console.log(newProf);
//     const response = createApiResponse( true , "updated succes", newProf , null)

//     return NextResponse.json( response , {status: 200});
//     } catch (error) {

//         const response = createApiResponse(false , "Error" , null , getErrorMessage(error))
//         return NextResponse.json( response , {status: 500})
//     }
// }

export async function GET() {

    try {
        const profs: Prof[] = await prisma.prof.findMany();

        console.log("read all prof : good ");

        const response = createApiResponse(true, "good", profs)
        return NextResponse.json(response, { status: 200 })

    } catch (error) {
        console.error("Error getting profs : " + error);
        const response = createApiResponse(false, "Error geting profs : ", null, getErrorMessage(error))

        return NextResponse.json(response, { status: 500 });
    }
}