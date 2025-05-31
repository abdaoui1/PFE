
'use client';

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { getBaseUrl } from '@/lib/utils';
import { Filiere } from '@prisma/client';
import { ApiResponse } from '@/lib/types';
import { Classe } from '@prisma/client';

export default function CreateClasse() {
  const [semestre, setSemestre] = useState('S1');
  const [section, setSection] = useState('');
  const [groupe, setGroupe] = useState('');
  const [effectif, setEffectif] = useState<number | null>(null);
  const [idFiliere, setIdFiliere] = useState<number>(1);
  const [filieres, setFilieres] = useState<Filiere[]>([]);



  useEffect(() => {
    async function getFilieres() {
      // for fetching filieres : 
      const res = await fetch(`${getBaseUrl()}/api/filiere`, {
        method: "GET",
      })
      const body: ApiResponse<Filiere[]> = await res.json();
      // let filieres: Filiere[];

      if (body.success && body.data) {
        setFilieres(body.data);
      } else {
        alert("Error , getting the filieres !");
        return (
          <h1>error</h1>
        )
      }
    }

    getFilieres();
  }, [])



  const addClasse = async (e: React.FormEvent) => {

    e.preventDefault();
    const res = await fetch(`${getBaseUrl()}/api/classe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idFiliere,
        semestre,
        section,
        groupe,
        effectif
      }),
    });
    const body: ApiResponse<Classe> = await res.json();
    if (body.success)
      alert('🟩 Classe updated!' + body.data?.idFiliere + body.data?.semestre);
    else {
      alert(" la classe n'est pas ete creee " + body.error)
    }
  };

  function handleReset() {
    setSemestre('');
    setSection('');
    setGroupe('');
    setEffectif(0);
    setIdFiliere(1);
  }

  return (
    <div>
      <table>
        <tbody>

          <tr>
            <td>Filiere</td>
            <td>
              <select name="filiere" id="filiere" required
                onChange={(e) => {
                  setIdFiliere(parseInt(e.target.value))
                }}>
                {filieres.map((filiere: Filiere) => {
                  return (
                    <option key={filiere.idFiliere} value={filiere.idFiliere}>
                      {filiere.abrFiliere}
                    </option>
                  )
                })}
              </select>
            </td>
          </tr>

          <tr>
            <td>Semestre</td>
            <td>
              <select required name="semestre" id="semestre"
                onChange={(e) => setSemestre(e.target.value)}>
                <option value="S1">S1 </option>
                <option value="S2">S2 </option>
                <option value="S3">S3 </option>
                <option value="S4">S4 </option>
                <option value="S5">S5 </option>
                <option value="S6">S6 </option>
                <option value="S7">S7 </option>
                <option value="S8">S8 </option>
                <option value="S9">S9 </option>
                <option value="S10">S10</option>
              </select>
            </td></tr>
          <tr>
            <td>Section</td>
            <td>
              <select name="section" id="section"
                onChange={(e) => setSection(e.target.value)}>
                <option value="">Sans section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
              </select>
            </td></tr>
          <tr>
            <td>Groupe</td>
            <td>
              <select name="section" id="section"
                onChange={(e) => setGroupe(e.target.value)}>
                <option value="">sans groupe</option>
                <option value="G1">Groupe 1</option>
                <option value="G2">Groupe 2</option>
                <option value="G3">Groupe 3</option>
                <option value="G4">Groupe 4</option>
                <option value="G5">Groupe 5</option>
                <option value="G6">Groupe 6</option>
                <option value="G7">Groupe 7</option>
                <option value="G8">Groupe 8</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Effectif</td>
            <td>
              <input value={effectif ?? ""} onChange={(e) => setEffectif(parseInt(e.target.value))} />
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={addClasse}>Valider</Button>
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
