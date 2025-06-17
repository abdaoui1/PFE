"use client";

import { useState } from "react";
import { Day, NumeroSeance, Seance, TypeLieu, Groupe } from "@prisma/client";
import SessionCard from "@/components/sessionCard";
import AddSessionModal from "./addSessionModal";

type SessionInfo =
    Seance & {
        module: { abrModule: string; nomModule: string };
        lieu: { typeLieu: TypeLieu | null; nomLieu: string | null; numeroSalle: number | null };
        prof: { nomProf: string; prenomProf: string };
        classe: { groupe: Groupe | null };
    };

type Props = {
    seances: SessionInfo[];
};

export default function ScheduleTable({ seances }: Props) {
    const [selectedCell, setSelectedCell] = useState<{ day: Day; num: number } | null>(null);

    const NUM_TO_ORDER: Record<number, NumeroSeance> = {
        1: "FIRST",
        2: "SECOND",
        3: "THIRD",
        4: "FOURTH",
        5: "FIFTH",
        6: "SIXTH",
    };

    function getSession(day: Day, num: number): SessionInfo | null {
        const order: NumeroSeance = NUM_TO_ORDER[num] ?? "FIRST";
        for (let seance of seances) {
            if (seance.day === day && seance.numeroSeance === order) return seance;
        }
        return null;
    }

    const DAYS: { en: Day; fr: string; row: number }[] = [
        { en: "MONDAY", fr: "LUNDI", row: 1 },
        { en: "TUESDAY", fr: "MARDI", row: 2 },
        { en: "WEDNEDAY", fr: "MERCREDI", row: 3 },
        { en: "THURSDAY", fr: "JEUDI", row: 4 },
        { en: "FRIDAY", fr: "VENDREDI", row: 5 },
        { en: "SATURDAY", fr: "SAMEDI", row: 6 },
    ];

    return (
        <div className="overflow-x-auto p-4">
            <table className="table-fixed border-collapse w-full text-center">
                <thead>
                    <tr className="bg-[#005B96] text-[#b3cde0]">
                        <th className="w-24 border p-2">Day</th>
                        <th className="w-32 border p-2 text-xs">8:30 - 10:00</th>
                        <th className="w-32 border p-2 text-xs">10:15 - 11:45</th>
                        <th className="w-32 border p-2 text-xs">12:00 - 13:30</th>
                        <th className="w-32 border p-2 text-xs">14:00 - 15:30</th>
                        <th className="w-32 border p-2 text-xs">15:45 - 17:15</th>
                        <th className="w-32 border p-2 text-xs">17:30 - 19:00</th>
                    </tr>
                </thead>
                <tbody>
                    {DAYS.map(({ en, fr, row }) => (
                        <tr key={row} className="even:bg-gray-50 dark:even:bg-[#011f4b] dark:text-[#b3cde0]">
                            <td className="border p-2 font-semibold">{fr}</td>
                            {Array.from({ length: 6 }, (_, i) => {
                                const num = i + 1;
                                const session = getSession(en, num);
                                const popoverId = session ? `popover-1-${en}-${num}` : `popover-2-${en}-${num}`;
                                return (
                                    <td key={`1,${num}`} className="border p-1 align-top h-20">
                                        <button
                                            popoverTarget={popoverId}
                                            className="w-full h-full"
                                        >
                                            {session ? (
                                                <div className="bg-white dark:bg-[#6497B1] dark:text-[#011f4b] border shadow p-1 rounded text-xs h-full">
                                                    <SessionCard seance={session} classe={""} />
                                                </div>
                                            ) : (
                                                <div className="w-full h-full min-h-[4rem] flex items-center justify-center">
                                                    <span className="text-gray-400 dark:text-gray-500"></span>
                                                </div>
                                            )}
                                        </button>

                                        {session ? (
                                            <ul
                                                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                                                popover="auto"
                                                id={popoverId}
                                            >
                                                <li>
                                                    <a>Edit</a>
                                                </li>
                                                <li>
                                                    <a>Delete</a>
                                                </li>
                                                <li>
                                                    <a>Info</a>
                                                </li>
                                            </ul>
                                        ) : (
                                           <ul
                                                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                                                popover="auto"
                                                id={popoverId}
                                            >
                                                <li>
                                                    <button
                                                        onClick={(e) => {  
                                                            setSelectedCell({ day: en, num });
                                                            // Close the popover
                                                            const popover = document.getElementById(popoverId);
                                                            if (popover) {
                                                                popover.hidePopover();
                                                            }
                                                        }}
                                                        className="text-blue-500 underline text-xs"
                                                    >
                                                        Add
                                                    </button>
                                                </li>
                                            </ul>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal Overlay */}
            {selectedCell && (
                <AddSessionModal
                    day={selectedCell.day}
                    num={selectedCell.num}
                    onClose={() => setSelectedCell(null)}
                />
            )}

        </div>
    );
}