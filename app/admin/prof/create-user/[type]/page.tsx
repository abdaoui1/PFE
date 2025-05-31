
'use client';

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { createApiResponse, getBaseUrl } from '@/lib/utils';
import { Classe, Etudiant, Filiere, Sexe } from '@prisma/client';
import { ApiResponse } from '@/lib/types';
import { Prof } from '@prisma/client';


type Type_User = 'etudiant' | 'prof' | 'admin'|'';

export default function CreateUser({ params }: { params: { type: Type_User } }) {
  const [nom, setNom] = useState<string>('');
  const [prenom, setPrenom] = useState<string>('');
  const [sexe, setSexe] = useState<Sexe | null>();
  const [numTele, setNumTele] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // for student : 
  const [cne, setCne] = useState<string>('');
  const [idClasse, setIdClasse] = useState<number | null>();

  // console.log("parms = " + (params).type);
  const [type, setType] = useState<Type_User>('');






  const addProf = async (e: React.FormEvent) => {
        console.log("1nom"+nom);
        console.log("2prenom"+prenom);
        console.log("3sexe"+sexe);
        console.log("4numtele"+numTele);
        console.log("5email"+email);
        console.log("6password"+password);
        console.log("7cne"+cne);
        console.log("8idclasse"+idClasse);
  
    e.preventDefault();
    // user to send ( prof or student)
    const userToSend = (type === "prof")
      ? { nom, prenom, sexe, numTele, email, password, typeUser: type }
      : { nom, prenom, sexe, numTele, email, password, typeUser: type, cne, idClasse };

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
    async function getTypeUser() {
      setType((await params).type);

    }
    getTypeUser();
  }, []);


  useEffect(() => {
    async function getClasses() {
      // console.log("params (await params).type = " + (await params).type);
      // setType( (await params).type )
      console.log("params type = " + type);
      if (type === 'etudiant') {
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
    }
    getClasses();
  }, [type])



  function handleReset() {
    setNom('');
    setPrenom('');
    setSexe(null);
    setEmail('');
    setPassword('');
    setNumTele('');
    if (type === 'etudiant') {
      setCne('');
      setIdClasse(null);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td colSpan={2}>Creer un {(classes?.[0]?.filiere.abrFiliere)}
              {/* {type} */}
            </td>
          </tr>
        </thead>
        <tbody>
          {(type === 'etudiant') && (
            <tr>
              <td>CNE</td>
              <td>
                <input type="text" value={cne}
                  onChange={(e) => setCne(e.target.value)} />
              </td>
            </tr>)}
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
              <input type="radio" value='HOMME'
                onChange={() => setSexe('HOMME')} />HOMME
              <input type="radio" value='FEMME'
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
            <td>Password</td>
            <td>
              <input type="text" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </td>
          </tr>

          {(type === 'etudiant') && (
            <tr>
              <td>Filiere</td>
              <td>
                <select name="classe" id="classe"
                  onChange={(e) => { setIdClasse(parseInt(e.target.value)) }}>
                  {classes.map((classe: (Classe & { filiere: Filiere })) => (
                    <option key={classe.idClasse}
                      value={classe.idClasse}>
                      {classe.filiere.abrFiliere + ' '
                        + classe.semestre + ' ' + (classe?.section || '') + ' ' + (classe?.groupe || '')}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          )}
          <tr>
            <td>
              <Button onClick={addProf}>Valider</Button>
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
