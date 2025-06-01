

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

    const seances = await prisma.seance.findMany({
        where: {
            idClasse: 200
        }

    })

    function sessionExists(day: Day, num: number): boolean {
        let order: NumeroSeance = getCorrespondingOrder(num);
        console.log("order=", order);
        console.log(`seances[0].day =`, seances[0].day);
        console.log(`seances[0].numeroSeance=`, seances[0].numeroSeance);
        for ( let seance of seances ) {
             console.log(`seance.day === day = `, seance.day === day && seance.numeroSeance === order);
            if (seance.day === day && seance.numeroSeance === order) return true;
        }
        return false;
        }
        // seances.some((seance, index) => {
        //     // console.log(`${index} seances[0].day =` ,seance.day);
        //     // console.log(`${index}  seances[0].numeroSeance=`, seance.numeroSeance);
        //     console.log(`seance.day === day = `, seance.day === day && seance.numeroSeance === order);
        //     if (seance.day === day && seance.numeroSeance === order) return true;
        // });
        // return false;
    

    function getCorrespondingOrder(num: number): NumeroSeance {
        switch (num) {
            case 1: return 'FIRST'
            case 2: return 'SECOND'
            case 3: return 'THIRD'
            case 4: return 'FOURTH'
            case 5: return 'FIFTH'
            case 6: return 'SIXTH'
            default: return 'FIRST'
        }
    }
    const day: Day = 'TUESDAY'

     function getSession(day : Day, num : number): Seance|null {
        let order:NumeroSeance = getCorrespondingOrder(num);
        for (let seance of seances ) {
            if( seance.day === day && seance.numeroSeance === order ) return seance;
        }
        return null;
     };

       console.log("sessionExists('MONDAY',i)= ", sessionExists('MONDAY',1) );
        


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

