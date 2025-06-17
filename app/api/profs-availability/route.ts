import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // ou ton chemin correct
import { Day , NumeroSeance } from "@prisma/client";


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const day :Day|null = searchParams.get("day") as Day|null;
  const order: NumeroSeance|null = searchParams.get("order") as  NumeroSeance|null;

  if (!day || !order) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  const conflictingSeances = await prisma.seance.findMany({
    where: {
      day,
      numeroSeance: order,
    },
    include: {
      module: true,
      classe: true,
    },
  });

  //const busyProfs = conflictingSeances.map(s => s.idProf);

  const allProfs = await prisma.prof.findMany();

  const profsWithStatus = allProfs.map(prof => {
    const conflict = conflictingSeances.find(s => s.idProf === prof.idProf);
    return {
      id: prof.idProf,
      nomProf: prof.nomProf,
      prenomProf: prof.prenomProf,
      isBusy: !!conflict,
      conflict: conflict ? {
        module: { nomModule: conflict.module.nomModule },
        classe: { nomClasse: conflict.classe.idClasse }
      } : null
    };
  });

  return NextResponse.json(profsWithStatus);
}
