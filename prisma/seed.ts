

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
import { Classe, Filiere, Etudiant, Day, NumeroSeance, Seance, TypeLieu, Groupe } from "@prisma/client";






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

    const seance: (Seance & {
  module: {
    abrModule: string;
    nomModule: string;
  };
  lieu: {
    nomLieu: string | null;
    typeLieu: TypeLieu | null;
    numeroSalle: number | null;
  };
  prof: {
    nomProf: string;
    prenomProf: string;
  };
  classe: {
    groupe: Groupe | null;
  };
})[] = await prisma.seance.findMany({
  where: { idClasse: 200 },
  include: {
    module: {
      select: {
        abrModule: true,
        nomModule: true,
      },
    },
    lieu: {
      select: {
        typeLieu: true,
        nomLieu: true,
        numeroSalle: true,
      },
    },
    prof: {
      select: {
        nomProf: true,
        prenomProf: true,
      },
    },
    classe: {
      select: {
        groupe: true,
      },
    },
  },
});


    )
    const seances: Seance[] = await prisma.seance.findMany({ where: { idClasse: 200 } })
    //  console.log(seances[0].);

    const s = seance[3];

    console.log({
        groupe: s.classe.groupe,
        nomProf: s.prof.nomProf,
        prenomProf: s.prof.prenomProf,
        typeLieu: s.lieu.typeLieu,
        numeroSalle: s.lieu.numeroSalle,
        nomModule: s.module.nomModule,
    });



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

