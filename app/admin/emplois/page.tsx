
import prisma from "@/lib/prisma"
import { Day, NumeroSeance, Seance } from "@prisma/client";
export default async function EmploisPage() {

    let seances : Seance[] ;

    try {
         seances = await prisma.seance.findMany(   { where:{idClasse:200 }}   )

         

    } catch (error) {
        console.error('Error : ',error);
    }

    const NUM_TO_ORDER : Record<number , NumeroSeance> = {
             1 :  'FIRST',
             2 :  'SECOND',
             3 :  'THIRD',
             4 :  'FOURTH',
             5 :  'FIFTH',
             6 :  'SIXTH',
    };


    function getSession(day : Day, num : number): Seance|null {
        let order:NumeroSeance = NUM_TO_ORDER[num] ?? 'FIRST';
        for (let seance of seances ) {
            if( seance.day === day && seance.numeroSeance === order ) return seance;
        }
        return null;
     };

     const DAYS: {en: Day , fr : string  , row : number}[] =
[
    { en : 'MONDAY' , fr :'LUNDI' , row : 1},
    { en : 'TUESDAY' , fr :'MARDI' , row : 2},
    { en : 'WEDNEDAY' , fr :'MERCREDI' , row : 3},
    { en : 'THURSDAY' , fr :'JEUDI' , row : 4},
    { en : 'FRIDAY' , fr :'VENDREDI' , row : 5},
    { en : 'SATURDAY' , fr :'SAMEDI' , row : 6},
]



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td ></td>
                        <td >8h:30      10h</td>
                        <td >10h:15     11h:45</td>
                        <td >12h        13h:30</td>
                        <td >14h:00     15h:30</td>
                        <td >15h:45     17h:15</td>
                        <td >17h:30     19h</td>
                    </tr>
                </thead>
                <tbody>
                    {DAYS.map( ({en , fr , row}) => (
                        <tr key={row}>
                            <td key={`1,${row}`}>{fr}</td>
                            {Array.from( {length: 6} , (_,i) => {
                                const num = i+1;
                                const session = getSession(en,num);
                                return ( <td key={`1,${num}`} > {session?.numeroSeance}</td>)
                            })}
                        </tr>
                    ))}
            
                </tbody>
            </table>
        </div>
    )
}