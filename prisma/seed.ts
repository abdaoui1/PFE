// haha i have problem with the ts extension.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

        console.log("There is two methods when using async functions ");

        console.log('First : using async function : ');

        const getProf = async (id: number) => {
            return ( await prisma.prof.findUnique({
                where: { idProf: id}
            }))
        }
        async function firstMethod(id : number) {
            const prof = await getProf(id);
            console.log(prof);
            
            prisma.$disconnect();
        }
        firstMethod(10);


// const modules = async function getModules() {
//         const mod = await prisma.module.findUnique({
//         where: {
//             idModule: 1
//         }
//     })
//     console.log(mod);
//     return mod;
//     }
//         // modules();
//     console.log("the value returned is : "+modules());


// const tabABC = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "V",
//     "Y",
// ];

// async function main() {

//     // const filiere = await prisma.filiere.create(
//     //     {
//     //         data: {
//     //             abrFiliere: "SMI/BD",
//     //             nomFiliere: "Smi developpement et bases de donnees",
//     //             idFiliere: 100,
//     //             classes: {
//     //                 create: [
//     //                     {
//     //                         semestre: "S6",
//     //                         effectif: 40,
//     //                         idClasse: 200,

//     //                     }
//     //                 ]

//     //             }
//     //         }
//     //     }
//     // )


//     const fili = await prisma.module.findMany();

//     console.log(fili);
// }






// const users = await prisma.filiere.createMany({
//     data: [
//         {
//             nomFiliere: "informatique applique",
//             abrFiliere: "IA"
//         },{
//             nomFiliere: "Informatique",
//             abrFiliere: "Info"
//         },{
//             nomFiliere: "",
//             abrFiliere: ""
//         },{
//             nomFiliere: "",
//             abrFiliere: ""
//         },{
//             nomFiliere: "",
//             abrFiliere: ""
//         },{
//             nomFiliere: "",
//             abrFiliere: ""
//         },{
//             nomFiliere: "",
//             abrFiliere: ""
//         },{
//             nomFiliere: "",
//             abrFiliere: ""
//         },{
//             nomFiliere: "",
//             abrFiliere: ""
//         },{
//             nomFiliere: "",
//             abrFiliere: ""
//         },{
//             nomFiliere: "",
//             abrFiliere: ""
//         }
//     ]
// }

// )








// main().then(async () => {
//     await prisma.$disconnect();
//     console.log("✅ good");
// })
//     .catch(async (error) => {
//         console.error("abdaoui Error " + error);
//         await prisma.$disconnect();
//         process.exit(1)
//     });




