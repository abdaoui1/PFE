

import Link from "next/link";
import { ApiResponse, Lieu } from "@/lib/types";
import { getBaseUrl } from "@/lib/utils";
import { DeleteLink } from "@/components/deleteLink"



export default async function LieusListe() {

    // for fetching lieux : 
    const res = await fetch(`${getBaseUrl()}/api/lieu`, {
        method: "GET",
    })

    const body: ApiResponse<Lieu[]> = await res.json();
    let lieux: Lieu[];

    if (body.success && body.data) {
        lieux = body.data;
    } else {
        alert("Error , getting the lieux !");
        return (
            <h1>error</h1>
        )
    }



    return (

        <div>
            <table className="table p-5  collapse border-collapse flex ">
                <thead>
                    <tr>
                        <th></th>
                        <th colSpan={2}>Actions</th>
                        <th>ID</th>
                        <th>Nom </th>
                        <th>TypeLieu</th>
                        <th>Bloc</th>
                        <th>Capacite </th>
                        <th>etat</th>
                    </tr>
                </thead>
                <tbody>
                    {lieux.map((lieu: Lieu) => (
                        <tr key={lieu.idLieu}>
                            <td><input type="checkbox" name="select" id="select" /></td>
                            <td>
                                <Link
                                    href={`/admin/lieu/update-lieu/${lieu.idLieu}`}
                                >Modifier</Link>
                            </td>
                            {/* <td>
                            <Link
                            href={`#`}>Copir</Link>
                        </td> */}
                            <td>
                                <DeleteLink content="Supprimer" id={lieu.idLieu} typeEntity="lieu"/>
                            </td>
                            <td>{lieu.idLieu}</td>
                            <td>{lieu.nomLieu}</td>
                            <td>{lieu.typeLieu}</td>
                            <td>{lieu.bloc}</td>
                            <td>{lieu.capacite}</td>
                            <td>{lieu.etat}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}