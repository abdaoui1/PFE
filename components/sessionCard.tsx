// components/SessionCard.tsx

import { Groupe, Seance, TypeLieu } from '@prisma/client'
import { Session } from 'inspector/promises';
import React from 'react'

type SessionInfo =
    Seance & {
        module: { abrModule: string; nomModule: string };
        lieu: { typeLieu: TypeLieu | null; nomLieu: string | null; numeroSalle: number | null };
        prof: { nomProf: string; prenomProf: string };
        classe: { groupe: Groupe | null; };
    };


type SessionInfoProps ={
    seance:SessionInfo|null;
    classe: string|null;
}



export default function SessionCard({ seance, classe }: SessionInfoProps) {

    if( !seance ) return null;
    const isTDorTP = seance?.typeSeance === 'TD' || seance?.typeSeance === 'TP';
    const location = (seance?.lieu?.typeLieu === 'AMPHI') 
        ? `A. ${seance?.lieu?.nomLieu ?? ''}` 
        : `S. ${seance?.lieu?.numeroSalle ?? ''}`;

    const profInitial = seance?.prof?.prenomProf?.[0]?.toUpperCase() ?? '';
    const profName = seance?.prof?.nomProf ?? '';

    return (
            <div>
                {isTDorTP ? (
                    <>
                        
                        {`Mod: ${seance?.typeSeance ?? ''} ${seance?.classe?.groupe ?? ''} ${seance?.module?.abrModule ?? ''}`}
                        <br />
                        {`Loc: ${location}`}
                        <br />
                        {`Pr: ${profInitial}.${profName}`}
                    </>
                ) : (
                    <>
                        {`Mod: ${seance?.module?.abrModule ?? ''}`}
                        <br />
                        {`Loc: ${location}`}
                        <br />
                        {`Pr: ${profInitial}.${profName}`}
                    </>
                )}
            </div>
    );
}
