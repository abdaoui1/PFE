
'use client';

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { getBaseUrl } from '@/lib/utils';
import { Filiere, Groupe, Semestre, Section, Sexe, TypeUser } from '@prisma/client';
import { ApiResponse } from '@/lib/types';
import { Prof } from '@prisma/client';

export default function UpdateProfForm({ prof }: { prof: Prof | null }) {
  const [nom, setNom] = useState<string>(prof?.nomProf ?? '');
  const [prenom, setPrenom] = useState<string>(prof?.prenomProf ?? '');
  const [sexe, setSexe] = useState<Sexe | null>(prof?.sexeProf ?? null);
  const [numTele, setNumTele] = useState<string>(prof?.teleProf ?? '');
  const [email, setEmail] = useState<string>(prof?.emailProf ?? '');
  // const [password, setPassword] = useState<string>();


  const updateProf = async (e: React.FormEvent) => {

    e.preventDefault();

    console.log("1 nom" + nom);
    console.log("2 prenom" + prenom);
    console.log("3 sexe" + sexe);
    console.log("4 numtele" + numTele);
    console.log("5 email" + email);


    const res = await fetch(`${getBaseUrl()}/api/user`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        typeUser: 'PROF',
        oldEmail: prof?.emailProf,
        nom,
        prenom,
        sexe,
        numTele,
        email
      }),
    });
    const body: ApiResponse<Prof> = await res.json();
    if (body.success)
      alert('🟩 Prof updated!' + body.data?.nomProf + body.data?.prenomProf);
    else {
      alert(" la prof n'est pas ete creee " + body.error)
    }
  };

  function handleReset() {
    setNom(prof?.nomProf ?? '');
    setPrenom(prof?.prenomProf ?? '');
    setSexe(prof?.sexeProf ?? null);
    setNumTele(prof?.teleProf ?? '');
    setEmail(prof?.emailProf ?? '');
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td colSpan={2}>Ajouter un Professeur
              {/* {type} */}
            </td>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>Nom</td>
            <td>
              <input type="text" value={nom}
                onChange={(e) => setNom(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Prenom</td>
            <td>
              <input type="text" value={prenom}
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
              <input type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </td>
          </tr>

          <tr>
            <td>
              <Button onClick={updateProf}>Valider</Button>
            </td>
            <td>
              <Button onClick={handleReset}>Vider</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
