
'use client';

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { getBaseUrl } from '@/lib/utils';
import { Classe, Etudiant, Filiere, Sexe } from '@prisma/client';
import { ApiResponse } from '@/lib/types';
import { Prof } from '@prisma/client';




export default function CreateEtudiant() {
    const [nom, setNom] = useState<string>('');
    const [prenom, setPrenom] = useState<string>('');
    const [sexe, setSexe] = useState<Sexe | null>();
    const [numTele, setNumTele] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // for student : 
    const [cne, setCne] = useState<string>('');
    const [idClasse, setIdClasse] = useState<number|string>('');








    const addStudent = async (e: React.FormEvent) => {
        console.log("1 nom" + nom);
        console.log("2 prenom" + prenom);
        console.log("3 sexe" + sexe);
        console.log("4 numtele" + numTele);
        console.log("5 email" + email);
        console.log("6 password" + password);
        console.log("7 cne" + cne);
        console.log("8 idclasse" + idClasse);

        e.preventDefault();
        // user to send ( prof or student)
        const userToSend = { nom, prenom, sexe, numTele, email, password, typeUser: 'ETUDIANT', cne, idClasse };

        const res = await fetch(`${getBaseUrl()}/api/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userToSend),
        });

        const body: ApiResponse<Prof | Etudiant> = await res.json();
        if (body.success)
            alert('🟩 user a ete cree!');
        else {
            alert(" le prof n'a pas ete creee " + body.error)
        }
    };


    // let classes: (Classe & { filiere: Filiere })[] | null = [];
    const [classes, setClasses] = useState<(Classe & { filiere: Filiere })[]>([]);


    useEffect(() => {
        async function getClasses() {


            // console.log("i am inside");
            try {
                const res = await fetch(`${getBaseUrl()}/api/classe`, {
                    method: 'GET'
                })

                const body: ApiResponse<(Classe & { filiere: Filiere })[]> = await res.json();

                if (body.success && body.data) {
                    console.log("success (getting the filieres ) ");
                    setClasses(body.data);

                    console.log("{classes[0]?.idClasse} = " + (classes?.[0]?.filiere.abrFiliere));

                } else {
                    console.error("Error : " + body.error);
                    console.error("Error msg : " + body.message)

                }
            } catch (error) {
                console.error("error while fetching the classes ", error)
            }
        }
        getClasses();
    }

        , []);



    function handleReset() {
        setNom('');
        setPrenom('');
        setSexe(null);
        setEmail('');
        setPassword('');
        setNumTele('');
        setCne('');
        setIdClasse('');
    }

    return (
        <div>
            <form onSubmit={addStudent} action="">
                <table>
                    <thead>
                        <tr>
                            <td colSpan={2}>Creer un {(classes?.[0]?.filiere.abrFiliere)}
                                {/* {type} */}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CNE</td>
                            <td>
                                <input type="text" value={cne} required
                                    onChange={(e) => setCne(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Nom</td>
                            <td>
                                <input type="text" value={nom} required
                                    onChange={(e) => setNom(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Prenom</td>
                            <td>
                                <input type="text" value={prenom} required
                                    onChange={(e) => setPrenom(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Sexe</td>
                            <td>
                                <input type="radio" value='HOMME' name='sexe' required
                                    onChange={() => setSexe('HOMME')} />HOMME
                                <input type="radio" value='FEMME' name='sexe'
                                    onChange={() => setSexe('FEMME')} />FEMME
                            </td>
                        </tr>
                        <tr>
                            <td>Numero du Telephone</td>
                            <td>
                                <input type="text" value={numTele}
                                    onChange={(e) => setNumTele(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" value={email} required
                                    onChange={(e) => setEmail(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="text" value={password} required
                                    onChange={(e) => setPassword(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Filiere</td>
                            <td>
                                <select name="classe" id="classe" required value={idClasse}
                                    onChange={(e) => { setIdClasse(parseInt(e.target.value)) }}>
                                    <option value="" disabled >-- Choisissez une classe --</option>
                                    {classes.map((classe: (Classe & { filiere: Filiere })) => (
                                        <option key={classe.idClasse}
                                            value={classe.idClasse}>
                                            {classe.filiere.abrFiliere
                                + ( (classe?.section)?`/${classe?.section}` : '' )
                                + ' ' + (classe?.groupe || '')
                                + ' ' + (classe.semestre)
                            }
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button type='submit'>Valider</Button>
                            </td>
                            <td>
                                <Button onClick={handleReset}>Vider</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
