
'use client';

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { getBaseUrl } from '@/lib/utils';
import { Filiere, Classe, Semestre, Section, Sexe, TypeUser, User } from '@prisma/client';
import { ApiResponse } from '@/lib/types';
import { Etudiant } from '@prisma/client';

export default function UpdateEtdForm({ etudiant }: { etudiant: Etudiant | null }) {
  const [cne, setCne] = useState<string>(etudiant?.cne ?? '');
  const [nom, setNom] = useState<string>(etudiant?.nomEtd ?? '');
  const [prenom, setPrenom] = useState<string>(etudiant?.prenomEtd ?? '');
  const [sexe, setSexe] = useState<Sexe | null>(etudiant?.sexeEtd ?? null);
  const [numTele, setNumTele] = useState<string>(etudiant?.teleEtd ?? '');
  const [email, setEmail] = useState<string>(etudiant?.emailEtd ?? '');
  const [idClasse, setIdClasse] = useState<number|string>(etudiant?.idClasse?? '');


  const updateEtd = async (e: React.FormEvent) => {

    e.preventDefault();

    console.log("0 cne = " + cne);
    console.log("1 nom" + nom);
    console.log("2 prenom" + prenom);
    console.log("3 sexe" + sexe);
    console.log("4 numtele" + numTele);
    console.log("5 email" + email);


    const res = await fetch(`${getBaseUrl()}/api/user`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        typeUser: 'ETUDIANT',
        oldEmail: etudiant?.emailEtd,
        cne,
        nom,
        prenom,
        sexe,
        numTele,
        email, 
        idClasse
      }),
    });
    const body: ApiResponse<User> = await res.json();
    if (body.success)
      alert('🟩 Etudiant updated!' + body.data?.email);
    else {
      alert(" la etudiant n'est pas ete creee " + body.error)
    }
  };

  function handleReset() {
    setCne(etudiant?.cne ?? '');
    setNom(etudiant?.nomEtd ?? '');
    setPrenom(etudiant?.prenomEtd ?? '');
    setSexe(etudiant?.sexeEtd ?? null);
    setNumTele(etudiant?.teleEtd ?? '');
    setEmail(etudiant?.emailEtd ?? '');
  }

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

  return (
    <div>
      <form onSubmit={updateEtd} action="">
        <table>
          <thead>
            <tr>
              <td colSpan={2}>Modifier un Etudiant
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
                  checked={(sexe === 'HOMME')}
                  onChange={() => setSexe('HOMME')} />HOMME
                <input type="radio" value='FEMME' name='sexe'
                  checked={(sexe === 'FEMME')}
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
