

// let dateExam = null;
// let report;
// let calendrierDisponible;


// if (report === false) {
//     dateExam = "13 juin"
// } else {
//     if (calendrierDisponible) {
//         dateExam = "exam dans le calendrier";
//     } else {
//         dateExam = "16 juin"
//     }
// }































// haha i have problem with the ts extension.

import prisma from "@/lib/prisma";
import { Classe, Filiere, Etudiant, Day, NumeroSeance, Seance } from "@prisma/client";






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

async function main() {

    console.log("typeof 'hello' = ",typeof []);
    console.log("typeof 'hello' = ",typeof {});
    // console.log("typeof 'hello' = ",typeof hello);
}




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


main().then(async () => {
    await prisma.$disconnect();
    console.log("✅ good");
})
    .catch(async (error) => {
        console.error("abdaoui Error " + error);
        await prisma.$disconnect();
        process.exit(1)
    });

