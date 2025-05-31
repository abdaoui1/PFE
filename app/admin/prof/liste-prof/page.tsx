

import Link from "next/link";
import { DeleteLink } from "@/components/deleteLink"
import prisma from "@/lib/prisma";
import { Prof } from "@prisma/client";




export default async function ProfsListe() {
    
    let profs : Prof[] =[];

       try {
             profs = await prisma.prof.findMany();
    
            console.log("read all prof : good ");
    
    
        } catch (error) {
            console.error("Error getting profs : " + error);
            
        } finally {
            await prisma.$disconnect();
        }

   
    return (

        <div>
            <table className="table collapse border-collapse " style={{ textAlign: "center" }} >
                <thead style={{ fontWeight: 'bold', color: "black" }}>
                    <tr>
                        <th></th>
                        <th colSpan={2}>Actions</th>
                        <th>Nom  Prof</th>
                        <th>Prenom </th>
                        <th>Sexe </th>
                        <th>Num Telephone </th>
                        <th>Email </th>
                    </tr>
                </thead>
                <tbody>
                    {profs.map((prof: Prof) => (
                        <tr key={prof.idProf}>
                            <td><input type="checkbox" name="select" id="select" /></td>
                            <td>
                                <Link
                                    href={`/admin/prof/update-prof/${prof.idProf}`}
                                >Modifier</Link>
                            </td>
                            {/* <td>
                            <Link
                            href={`#`}>Copir</Link>
                        </td> */}
                            <td>
                                <DeleteLink content="Supprimer" id={prof.idProf} typeEntity="prof" />
                            </td>
                            <td>{prof.nomProf}</td>
                            <td>{prof.prenomProf}</td>
                            <td>{prof.sexeProf}</td>
                            <td>{prof.teleProf}</td>
                            <td>{prof.emailProf}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}