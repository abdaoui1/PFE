

import Link from "next/link";
import { ApiResponse, Module } from "@/lib/types";
import { getBaseUrl } from "@/lib/utils";
import { DeleteLink } from "@/components/deleteLink"



export default async function ModulesListe() {

    // for fetching modules : 
    const res = await fetch(`${getBaseUrl()}/api/module-fac`, {
        method: "GET",
    })
    const body: ApiResponse<Module[]> = await res.json();
    let modules: Module[];

    if (body.success && body.data) {
        modules = body.data;
    } else {
        console.error("Error , getting the modules !");
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
                        <th>Departement</th>
                        <th>Dure</th>
                    </tr>
                </thead>
                <tbody>
                    {modules.map((module: Module) => (
                        <tr key={module.idModule}>
                            <td><input type="checkbox" name="select" id="select" /></td>
                            <td>
                                <Link
                                    href={`/admin/modules-fac/update-module/${module.idModule}`}
                                >Modifier</Link>
                            </td>
                            {/* <td>
                            <Link
                            href={`#`}>Copir</Link>
                        </td> */}
                            <td>
                                <DeleteLink content="Supprimer" id={module.idModule} typeEntity="module" />
                            </td>
                            <td>{module.idModule}</td>
                            <td>{module.nomModule}</td>
                            <td>{module.abrModule}</td>
                            <td>{module.departement}</td>
                            <td>{module.dure}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}