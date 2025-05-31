

import Link from "next/link";
import { ApiResponse, Classe } from "@/lib/types";
import { getBaseUrl } from "@/lib/utils";
import { DeleteLink } from "@/components/deleteLink"




export default async function ClassesListe() {

    // for fetching classes : 
    const res = await fetch(`${getBaseUrl()}/api/classe`, {
        method: "GET",
    })
    const body: ApiResponse<Classe[]> = await res.json();
    let classes: Classe[];

    if (body.success && body.data) {
        classes = body.data;
    } else {
        console.error("Error , getting the classes !");
        return (
            <h1>error</h1>
        )
    }

    return (

        <div>
            <table className="table collapse border-collapse " style={{ textAlign: "center" }} >
                <thead style={{ fontWeight: 'bold', color: "black" }}>
                    <tr>
                        <th></th>
                        <th colSpan={2}>Actions</th>
                        <th>ID</th>
                        <th>Semestre</th>
                        <th>Section</th>
                        <th>Groupe</th>
                        <th>Effectif</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((classe: Classe) => (
                        <tr key={classe.idClasse}>
                            <td><input type="checkbox" name="select" id="select" /></td>
                            <td>
                                <Link
                                    href={`/admin/classe/update-classe/${classe.idClasse}`}
                                >Modifier</Link>
                            </td>
                            {/* <td>
                            <Link
                            href={`#`}>Copir</Link>
                        </td> */}
                            <td>
                                <DeleteLink content="Supprimer" id={classe.idClasse} typeEntity="classe" />
                            </td>
                            <td>{classe.idClasse}</td>
                            <td>{classe.semestre}</td>
                            <td>{classe.section}</td>
                            <td>{classe.groupe}</td>
                            <td>{classe.effectif}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}