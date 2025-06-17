import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Day, NumeroSeance, TypeLieu } from "@prisma/client";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const day: Day | null = searchParams.get("day") as Day | null;
  const order: NumeroSeance | null = searchParams.get("order") as NumeroSeance | null;

  if (!day || !order) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  // Séances qui entrent en conflit
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

  // Tous les lieux
  const allLieux = await prisma.lieu.findMany();

  // Marquage des lieux occupés
  const lieuxWithStatus = allLieux.map(lieu => {
    const conflict = conflictingSeances.find(s => s.idLieu === lieu.idLieu);
    return {
      id: lieu.idLieu,
      nomLieu: lieu.nomLieu,
      numeroSalle: lieu.numeroSalle,
      typeLieu: lieu.typeLieu,
      isBusy: !!conflict,
      conflict: conflict ? {
        module: { nomModule: conflict.module.nomModule },
        classe: { nomClasse: conflict.classe.idClasse }
      } : null
    };
  });

  return NextResponse.json(lieuxWithStatus);
}
