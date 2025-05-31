

import Link from "next/link";
import { ApiResponse, Filiere } from "@/lib/types";
import { getBaseUrl } from "@/lib/utils";
import { DeleteLink } from "@/components/deleteLink"



export default async function FilieresListe() {

    // for fetching filieres : 
    const res = await fetch(`${getBaseUrl()}/api/filiere`, {
        method: "GET",
    })
    const body: ApiResponse<Filiere[]> = await res.json();
    let filieres: Filiere[];

    if (body.success && body.data) {
        filieres = body.data;
    } else {
        alert("Error , getting the filieres !");
        return (
            <h1>error</h1>
        )
    }



    return (

        <div>
            <table className="table collapse border-collapse ">
                <thead>
                    <tr>
                        <th></th>
                        <th colSpan={2}>Actions</th>
                        <th>ID</th>
                        <th>Nom </th>
                        <th>Abreviation</th>
                    </tr>
                </thead>
                <tbody>
                    {filieres.map((filiere: Filiere) => (
                        <tr key={filiere.idFiliere}>
                            <td><input type="checkbox" name="select" id="select" /></td>
                            <td>
                                <Link
                                    href={`/admin/filieres/update-filiere/${filiere.idFiliere}`}
                                >Modifier</Link>
                            </td>
                            {/* <td>
                            <Link
                            href={`#`}>Copir</Link>
                        </td> */}
                            <td>
                                <DeleteLink content="Supprimer" id={filiere.idFiliere} typeEntity="filiere" />
                            </td>
                            <td>{filiere.idFiliere}</td>
                            <td>{filiere.nomFiliere}</td>
                            <td>{filiere.abrFiliere}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}