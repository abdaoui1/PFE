
'use client';

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { getBaseUrl } from '@/lib/utils';
import { Sexe } from '@prisma/client';
import { ApiResponse } from '@/lib/types';
import { Prof } from '@prisma/client';




export default function CreateProf() {
  const [nom, setNom] = useState<string>('');
  const [prenom, setPrenom] = useState<string>('');
  const [sexe, setSexe] = useState<Sexe | null>();
  const [numTele, setNumTele] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');







  const addProf = async (e: React.FormEvent) => {
    console.log("1 nom" + nom);
    console.log("2 prenom" + prenom);
    console.log("3 sexe" + sexe);
    console.log("4 numtele" + numTele);
    console.log("5 email" + email);
    console.log("6 password" + password);


    e.preventDefault();
    // user to send ( prof or student)
    const userToSend = { nom, prenom, sexe, numTele, email, password, typeUser: "PROF" }


    const res = await fetch(`${getBaseUrl()}/api/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userToSend),
    });

    const body: ApiResponse<Prof> = await res.json();
    if (body.success)
      alert('🟩 user a ete cree!');
    else {
      alert(" le prof n'a pas ete creee " + body.error)
    }
  };


  function handleReset() {
    setNom('');
    setPrenom('');
    setSexe(null);
    setEmail('');
    setPassword('');
    setNumTele('');

  }

  return (
    <div>
      <form onSubmit={addProf} >
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
