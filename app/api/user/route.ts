

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

import { Prof, Sexe } from "@prisma/client";
import { createApiResponse, getErrorMessage } from "@/lib/utils";

type Type_User = 'ETUDIANT' | 'PROF' | 'ADMIN   ' | '';

type dataProf = {
    nom: string, prenom: string, sexe: Sexe, numTele: string,
    email: string, password: string, typeUser: Type_User, oldEmail: string
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
        if (typeUser === 'ETUDIANT') {
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
        } else if (typeUser === "PROF") {

            const newProf = await prisma.user.create({
                data: {
                    email,
                    password,
                    typeUser,
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


export async function PUT(req: NextRequest) { // for update 

    try {
        const body: dataProf & dataStudent = await req.json();

        const { nom, prenom, sexe, numTele, email, password, typeUser, oldEmail } = body;


        console.log("1nom=" + nom);
        console.log("2prenom=" + prenom);
        console.log("3sexe=" + sexe);
        console.log("4numtele=" + numTele);
        console.log("5email=" + email);
        console.log("6password=" + password);
        console.log("7 its a : typeUser = " + typeUser);

        if (typeUser === 'ETUDIANT') {
            const { cne, idClasse } = body;
            console.log("its a student");
            console.log("7 cne=" + cne);
            console.log("8 idclasse=" + idClasse);
            const newStudent = await prisma.user.update({
                where: {
                    email: oldEmail
                },
                data: {
                    email,
                    password,
                    typeUser: 'ETUDIANT',
                    etudiant: {
                        update: {
                            data: {
                                cne,
                                nomEtd: nom,
                                prenomEtd: prenom,
                                sexeEtd: sexe,
                                teleEtd: numTele,
                                idClasse,
                            }
                        }
                    }
                }
            })

            console.log("updated Student : "); console.log(newStudent);

            const response = createApiResponse(true, "good ", newStudent, null);

            return NextResponse.json(response, { status: 201 });
        } else if (typeUser === "PROF") {
            const newProf = await prisma.user.update({
                where: { email: oldEmail },
                data: {
                    email,
                    password,
                    typeUser,
                    prof: {
                        update: {
                            data: {
                                nomProf: nom,
                                prenomProf: prenom,
                                sexeProf: sexe,
                                teleProf: numTele,
                            }
                        }
                    }
                }
            })

            console.log("update Prof : "); console.log(newProf);

            const response = createApiResponse(true, "good ", newProf, null);

            return NextResponse.json(response, { status: 201 });
        } else {
            const response = createApiResponse(false, "Wrong typeUser ", null,)
            return NextResponse.json(response, { status: 500 });
        }

    } catch (error) {
        const response = createApiResponse(false, "Error creating user ", null, getErrorMessage(error))
        return NextResponse.json(response, { status: 500 });
    }
}

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