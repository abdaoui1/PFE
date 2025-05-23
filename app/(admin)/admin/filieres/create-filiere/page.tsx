
'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { getBaseUrl } from '@/lib/utils';

export default function CreateFiliere() {
  const [nom, setNom] = useState('');
  const [abr, setAbr] = useState('');



  const addFiliere = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${getBaseUrl()}/api/filiere`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nomFiliere: nom,
        abrFiliere: abr,
      }),
    });
    alert('🟩 Filiere updated!');
  };

  function handleReset() {
    setNom('');
    setAbr('');
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Nom</td>
            <td>
              <input required value={nom} onChange={(e) => setNom(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Abbreviation</td>
            <td>
              <input required value={abr} onChange={(e) => setAbr(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={addFiliere}>Valider</Button>
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
