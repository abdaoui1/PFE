// app/(your-route)/page.tsx
import prisma from "@/lib/prisma";
import { Day, NumeroSeance, Seance, TypeLieu, Groupe } from "@prisma/client";
import ScheduleTable from "@/components/scheduleTable";

type SessionInfo =
  Seance & {
    module: { abrModule: string; nomModule: string };
    lieu: { typeLieu: TypeLieu | null; nomLieu: string | null; numeroSalle: number | null };
    prof: { nomProf: string; prenomProf: string };
    classe: { groupe: Groupe | null };
  };

export default async function EmploisPage() {
  let seances: SessionInfo[] = [];

  try {
    seances = await prisma.seance.findMany({
      where: { idClasse: 2 },
      include: {
        module: {
          select: { abrModule: true, nomModule: true },
        },
        lieu: {
          select: { typeLieu: true, nomLieu: true, numeroSalle: true },
        },
        prof: {
          select: { nomProf: true, prenomProf: true },
        },
        classe: {
          select: { groupe: true },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching seances:", error);
  }

  return <ScheduleTable seances={seances} />;
}
