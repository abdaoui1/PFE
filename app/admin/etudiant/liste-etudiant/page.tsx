

import Link from "next/link";
import { DeleteLink } from "@/components/deleteLink"
import prisma from "@/lib/prisma";
import { Classe, Etudiant, Filiere } from "@prisma/client";




export default async function EtudiantsListe() {

    let etudiants: (Etudiant & { classe: Classe & { filiere: Filiere } })[] = [];

    try {
        etudiants = await prisma.etudiant.findMany({
            include: {
                classe: {
                    include: {
                        filiere: true
                    }
                }
            }
        });


        console.log("read all students : good ");


    } catch (error) {
        console.error("Error getting etudiants : " + error);

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
                        <th>CNE</th>
                        <th>Filiere</th>
                        <th>Nom  Etudiant</th>
                        <th>Prenom </th>
                        <th>Sexe </th>
                        <th>Num Telephone </th>
                        <th>Email </th>
                    </tr>
                </thead>
                <tbody>
                    {etudiants.map((etudiant: (Etudiant & { classe: Classe & { filiere: Filiere } })) => (
                        <tr key={etudiant.emailEtd}>
                            <td><input type="checkbox" name="select" id="select" /></td>
                            <td>
                                <Link
                                    href={`/admin/etudiant/update-etudiant/${etudiant.emailEtd}`}
                                >Modifier</Link>
                            </td>
                            {/* <td>
                            <Link
                            href={`#`}>Copir</Link>
                        </td> */}
                            <td>
                                <DeleteLink content="Supprimer" id={etudiant.emailEtd} typeEntity="etudiant" />
                            </td>
                            <td>{etudiant.cne}</td>
                            <td>
                                {etudiant.classe.filiere.abrFiliere
                                + ( (etudiant.classe?.section)?`/${etudiant.classe?.section}` : '' )
                                + ' ' + (etudiant.classe?.groupe || '')
                                + ' ' + (etudiant.classe.semestre)
                            }</td>
                            <td>{etudiant.nomEtd}</td>
                            <td>{etudiant.prenomEtd}</td>
                            <td>{etudiant.sexeEtd}</td>
                            <td>{etudiant.teleEtd}</td>
                            <td>{etudiant.emailEtd}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}