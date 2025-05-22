// app/admin/modifier-module/[id]/UpdateModuleForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { getBaseUrl } from '@/lib/utils';

type Module = {
  idModule: number;
  abrModule: string;
  nomModule: string;
  departement: string | null;
  dure: number;
};

export default function UpdateModuleForm({ module }: { module: Module | null }) {
  const [nom, setNom] = useState(module?.nomModule || '');
  const [abr, setAbr] = useState(module?.abrModule || '');
  const [departement, setDepartement] = useState(module?.departement || '');
  const [dure, setDure] = useState(module?.dure || 0);

  const router = useRouter();

  const updateModule = async (e: React.FormEvent) => {
    // e.preventDefault();
    console.log('🟩');
    console.log(getBaseUrl());
    await fetch(`${getBaseUrl()}/api/module-fac`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idModule: module?.idModule,
        nomModule: nom,
        abrModule: abr,
        departement,
        dure,
      }),
    });
    alert('🟩 Module updated!');
  };

  function handleReset() {
    setNom(module?.nomModule || '');
    setAbr(module?.abrModule || '');
    setDepartement(module?.departement || '');
    setDure(module?.dure || 0);

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
            <td>Département</td>
            <td>
              <input value={departement} onChange={(e) => setDepartement(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Durée</td>
            <td>
              <input
                required
                type="number"
                value={dure}
                onChange={(e) => setDure(parseInt(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={updateModule}>Valider</Button>
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
