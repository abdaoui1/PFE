
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { getBaseUrl } from '@/lib/utils';
import { Lieu , sallesJSX } from '@/lib/types';
import { TypeLieu } from '@prisma/client';



export default function UpdateLieuForm({ lieu }: { lieu: Lieu | null }) {
  const [nomLieu, setNomLieu] = useState<string>(lieu?.nomLieu ?? '');
  const [typeLieu, setTypeLieu] = useState<'SALLE'|'AMPHI'>(lieu?.typeLieu ?? 'AMPHI');
  const [bloc, setBloc] = useState(lieu?.bloc);
  const [numeroSalle, setNumeroSalle] = useState(lieu?.numeroSalle);
  const [capacite, setCapacite] = useState<number>(lieu?.capacite ?? 50);
  const [etat, setEtat] = useState<string>(lieu?.etat ?? '');

  const [isSalle, setSalle] = useState<boolean>(lieu?.typeLieu === 'SALLE');// true if its a salle

  function handleReset() {
    setNomLieu(lieu?.nomLieu || '');
    setTypeLieu(lieu?.typeLieu || 'AMPHI');
    setBloc(lieu?.bloc);
    setNumeroSalle(lieu?.numeroSalle );
    setCapacite(lieu?.capacite ?? 50);
    setEtat(lieu?.etat || '');
  }
  // const router = useRouter();

  const updateLieu = async (e: React.FormEvent) => {
    // e.preventDefault();
    //console.log('🟩');

    const newLieu = await fetch(`${getBaseUrl()}/api/lieu`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idLieu: lieu?.idLieu,
        nomLieu,
        typeLieu,
        numeroSalle,
        capacite,
        bloc,
        etat
      }),
    });
    alert('🟩 Lieu updated!');
  };

  
  

  return (
    <div>
      <table className="table table-fixed bg-gray-400 p-5  collapse border-collapse flex ">
        <tbody>
          <tr>
            <td>typeLieu</td>
            <td>
              <select name="typeLieu" id="typeLieu" value={typeLieu} 
              onChange={(e)=> {setSalle(!isSalle);
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
              <input disabled={isSalle} required type="text" value={nomLieu} 
              onChange={(e) => setNomLieu(e.target.value)} />
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
              <select disabled={!isSalle} name="numeroSalle" id="numeroSalle">
                 {sallesJSX}
              </select>
            </td>
          </tr>
          <tr>
            <td>capacite</td>
            <td>
              <input  type='number' step={1} value={capacite} onChange={(e) => setCapacite(parseInt(e.target.value))} />
            </td>
          </tr>

          <tr>
            <td>etat</td>
            <td>
              <textarea onChange={(e)=> setEtat(e.target.value)} name="etat" id="etat"  placeholder='projecteur,prises , tables...'></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={updateLieu}>Valider</Button>
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
