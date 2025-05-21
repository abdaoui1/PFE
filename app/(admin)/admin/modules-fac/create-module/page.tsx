
'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function CreateModule() {
  const [nom, setNom] = useState('');
  const [abr, setAbr] = useState('');
  const [departement, setDepartement] = useState('');
  const [dure, setDure] = useState(0);

  

  const addModule = async (e: React.FormEvent) => {
    // e.preventDefault();
    await fetch('/api/module-fac/create-module', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        nomModule: nom,
        abrModule: abr,
        departement,
        dure,
      }),
    });
    alert('🟩 Module updated!');
  };

  function handleReset() {
    setNom('');
    setAbr('');
    setDepartement('');
    setDure(0);

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
              <Button onClick={addModule}>Valider</Button>
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
