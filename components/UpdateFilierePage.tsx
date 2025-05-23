// app/admin/modifier-filiere/[id]/UpdateFiliereForm.tsx
'use client';

import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { getBaseUrl } from '@/lib/utils';
import { Filiere } from '@/lib/types';

export default function UpdateFiliereForm({ filiere }: { filiere: Filiere | null }) {
  const [nom, setNom] = useState<string>(filiere?.nomFiliere || "");
  const [abr, setAbr] = useState<string>(filiere?.abrFiliere || "");

  // const router = useRouter();

  const updateFiliere = async (e: React.FormEvent) => {
    // e.preventDefault();
    // console.log('🟩');

    await fetch(`${getBaseUrl()}/api/filiere`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idFiliere: filiere?.idFiliere,
        nomFiliere: nom,
        abrFiliere: abr,
      }),
    });
    alert('🟩 Filiere updated!');
  };

  function handleReset() {
    setNom(filiere?.nomFiliere || '');
    setAbr(filiere?.abrFiliere || '');

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
              <Button onClick={updateFiliere}>Valider</Button>
            </td>
            <td>
              <Button onClick={handleReset}>Annuler</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
