
import prisma from "@/lib/prisma"
import { Day, NumeroSeance, Seance } from "@prisma/client";
export default async function EmploisPage() {

    let seances : Seance[] ;

    try {
         seances = await prisma.seance.findMany(   { where:{idClasse:200 }}   )

         

    } catch (error) {
        console.error('Error : ',error);
    }

    //  "FIRST" | "SECOND" | "THIRD" | "FOURTH" | "FIFTH" | "SIXTH"

    function getCorrespondingOrder(num: number): NumeroSeance{
        switch(num) {
            case 1 : return 'FIRST'
            case 2 : return 'SECOND'
            case 3 : return 'THIRD'
            case 4 : return 'FOURTH'
            case 5 : return 'FIFTH'
            case 6 : return 'SIXTH'
            default: return 'FIRST'
        }
    }

    function sessionExists(day : Day, num : number):boolean {
        let order:NumeroSeance = getCorrespondingOrder(num);
        for ( let seance  of seances) {
            if( seance.day === day && seance.numeroSeance === order ) return true;

        }
        
        return false;
    };


    function getSession(day : Day, num : number): Seance|null {
        let order:NumeroSeance = getCorrespondingOrder(num);
        for (let seance of seances ) {
            if( seance.day === day && seance.numeroSeance === order ) return seance;
        }
        return null;
     };

    // let helloJSX= <em>hello</em>;
    
    let mondaySessionsJSX = [];
    for (let i = 1 ; i <= 6 ; i++ ) {
        console.log("sessionExists('MONDAY',i)= ", sessionExists('MONDAY',i) );
        mondaySessionsJSX.push(<td id={`1,${i}`} key={`1,${i}`}>{ ( sessionExists('MONDAY',i) ) && getSession('MONDAY',i)?.numeroSeance}</td>)
    }
    let tuesdaySessionsJSX = [];
    for (let i = 1 ; i <= 6 ; i++ ) {
        tuesdaySessionsJSX.push(<td id={`2,${i}`} key={`2,${i}`}>{ ( sessionExists('TUESDAY',i) ) && getSession('TUESDAY',i)?.numeroSeance}</td>)
    }
    let wendsdaySessionsJSX = [];
    for (let i = 1 ; i <= 6 ; i++ ) {
        wendsdaySessionsJSX.push(<td id={`3,${i}`} key={`3,${i}`}>{ ( sessionExists('WEDNEDAY',i) ) && getSession('WEDNEDAY',i)?.numeroSeance}</td>)
    }
    let thursdaySessionsJSX = [];
    for (let i = 1 ; i <= 6 ; i++ ) {
        thursdaySessionsJSX.push(<td id={`4,${i}`} key={`4,${i}`}>{ ( sessionExists('THURSDAY',i) ) && getSession('THURSDAY',i)?.numeroSeance}</td>)
    }
    let fridaySessionsJSX = [];
    for (let i = 1 ; i <= 6 ; i++ ) {
        fridaySessionsJSX.push(<td id={`5,${i}`} key={`5,${i}`}>{ ( sessionExists('FRIDAY',i) ) && getSession('FRIDAY',i)?.numeroSeance}</td>)
    }
    let saturdaySessionsJSX = [];
    for (let i = 1 ; i <= 6 ; i++ ) {
        saturdaySessionsJSX.push(<td id={`6,${i}`} key={`6,${i}`}>{ ( sessionExists('SATURDAY',i) ) && getSession('SATURDAY',i)?.numeroSeance}</td>)
    }






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
                <tr>
                    <td id="0">LUNDI</td>
                    {mondaySessionsJSX}

                </tr>
                <tr>
                    <td id="0">MARDI</td>
                    {tuesdaySessionsJSX}
                </tr>
                <tr>
                    <td id="0">MERCREDI</td>
                    {wendsdaySessionsJSX}
                </tr>
                <tr>
                    <td id="0">JEUDI</td>
                   {thursdaySessionsJSX}
                </tr>
                <tr>
                    <td id="0">VENDREDI</td>
                   {fridaySessionsJSX}
                </tr>
                <tr>
                    <td id="0">SAMEDI</td>
                  {saturdaySessionsJSX}
                </tr>
                </tbody>
            </table>
        </div>
    )
}