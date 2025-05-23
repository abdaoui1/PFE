
'use client';

import { JSX, useState } from 'react';

import { Button } from '@/components/ui/button';
import { getBaseUrl } from '@/lib/utils';
import { ApiResponse, sallesJSX, Lieu, Bloc, TypeLieu } from '@/lib/types';

export default function CreateLieu() {

  const [nomLieu, setNomLieu] = useState<string>('');
  const [typeLieu, setTypeLieu] = useState<'SALLE' | 'AMPHI'>('AMPHI');
  const [bloc, setBloc] = useState<Bloc>();
  const [numeroSalle, setNumeroSalle] = useState<number>();
  const [capacite, setCapacite] = useState<number>(50);
  const [etat, setEtat] = useState<string>('');



  const [isSalle, setSalle] = useState(false);

  const addLieu = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${getBaseUrl()}/api/lieu`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nomLieu,
        typeLieu,
        bloc,
        numeroSalle,
        capacite,
        etat,
      }),
    });
    const body: ApiResponse<Lieu> = await res.json();
    if (body.success && body.data)
      alert(`🟩 Lieu created ${body.data.nomLieu}`);
    else {
      alert(`error:${body?.error} , \n ${body.message}`);
    }
  };

  function handleReset() {
    setNomLieu('');
    setTypeLieu('SALLE');
    setBloc('A');
    setCapacite(50);
    setEtat('');
  }



  return (
    <div>
      <table className="table p-5  collapse border-collapse flex ">
        <tbody>
          <tr>
            <td>typeLieu</td>
            <td>
              <select name="typeLieu" id="typeLieu"
                onChange={(e) => {
                  setSalle(!isSalle);
                  setNomLieu('');
                  setTypeLieu(e.target.value as TypeLieu)
                }}>
                <option value="AMPHI">AMPHI</option>
                <option value="SALLE">SALLE</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Nom (Amphi) </td>
            <td>
              <input disabled={isSalle} required type="text" value={nomLieu} onChange={(e) => setNomLieu(e.target.value)} />
            </td>
          </tr>

          <tr>
            <td>Bloc</td>
            <td>
              <select disabled={!isSalle} required name="Bloc" id="Bloc" >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Numero de Salle </td>
            <td>
              <select disabled={!isSalle} name="numeroSalle" id="numeroSalle"
                onChange={(e) => setNumeroSalle(parseInt(e.target.value))}>
                {sallesJSX}
              </select>
            </td>
          </tr>
          <tr>
            <td>capacite</td>
            <td>
              <input type='number' step={1} value={capacite} onChange={(e) => setCapacite(parseInt(e.target.value))} />
            </td>
          </tr>

          <tr>
            <td>etat</td>
            <td>
              <textarea  onChange={(e)=> setEtat(e.target.value)} name="etat" id="etat" cols={20} rows={3} placeholder='projecteur,prises , tables...'></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={addLieu}>Valider</Button>
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
