"use client";

import { useEffect, useState } from "react";
import { Day, Lieu, NumeroSeance, TypeLieu, TypeSeance } from "@prisma/client";

type Props = {
  day: string;
  num: number;
  onClose: () => void;
};

const days: { en: Day; fr: string; }[] = [
  { en: "MONDAY", fr: "LUNDI", },
  { en: "TUESDAY", fr: "MARDI", },
  { en: "WEDNEDAY", fr: "MERCREDI", },
  { en: "THURSDAY", fr: "JEUDI", },
  { en: "FRIDAY", fr: "VENDREDI", },
  { en: "SATURDAY", fr: "SAMEDI", },
];
const orders: { num: NumeroSeance; time: string }[] = [
  { num: "FIRST", time: "8:30 - 10:00", },
  { num: "SECOND", time: "10:15 - 11:45", },
  { num: "THIRD", time: "12:00 - 13:30", },
  { num: "FOURTH", time: "14:00 - 15:30", },
  { num: "FIFTH", time: "15:45 - 17:15", },
  { num: "SIXTH", time: "17:30 - 19:00", },
];

type ProfWithAvailability = {
  id: string;
  nomProf: string;
  prenomProf: string;
  isBusy: boolean;
  conflict?: {
    module: { nomModule: string };
    classe: { nomClasse: string };
  };
};

type LieuWithAvailability = {
  id: string;
  nomLieu?: string;
  numeroSalle?: number;
  typeLieu: TypeLieu; // ou TypeLieu si tu l'importes
  isBusy: boolean;
  conflict?: {
    module: { nomModule: string };
    classe: { nomClasse: string };
  };
};

type ModuleSummary = {
  idModule: number;
  nomModule: string;
};

const types: TypeSeance[] = ["COURS", "TD", "TP"];

export default function AddSessionModal({ day, num, onClose }: Props) {
  const [modules, setModules] = useState<ModuleSummary[]>([]);
  const [profs, setProfs] = useState<ProfWithAvailability[]>([]);
  const [lieux, setLieux] = useState([]);
  const [classes, setClasses] = useState([]);

  const [modalProfId, setModalProfId] = useState<string | null>(null);


  // Form state
  const [formData, setFormData] = useState({
    day,
    order: orders[num - 1] || "FIRST",
    type: "COURS",
    classeId: "",
    moduleId: "",
    profId: "",
    lieuId: "",
  });

  useEffect(() => {
    // fetch("/api/modules").then(res => res.json()).then(setModules);
     fetch('/api/module-fac?type=summary')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setModules(data.data); // assumes createApiResponse returns { success, data }
        }
      })
      .catch(err => console.error('Error fetching modules:', err));

    fetch("/api/classes").then(res => res.json()).then(setClasses);
  }, []);

  useEffect(() => {
    fetch(`/api/profs-availability?day=${formData.day}&order=${formData.order.num}`)
      .then(res => res.json())
      .then(setProfs);

    fetch(`/api/lieux-availability?day=${formData.day}&order=${formData.order.num}`)
      .then(res => res.json())
      .then(setLieux);
  }, [formData.day, formData.order]);



  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleReset() {
    setFormData({
      day,
      order: orders[num - 1] || "FIRST",
      type: "COURS",
      classeId: "",
      moduleId: "",
      profId: "",
      lieuId: "",
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: submit formData to the backend
    console.log(formData);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white dark:bg-onSecondary p-6 rounded shadow-md w-96">
        {/* ❌ Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
        >
          ✕
        </button>

        <h2 className="text-lg mb-4 font-semibold text-primary dark:text-onPrimary text-center">
          Ajouter une Seance
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Day */}
          <select name="day" value={formData.day} onChange={handleChange} className="select select-bordered w-full">
            {days.map(day => (
              <option key={day.en} value={day.en}>{day.fr}</option>
            ))}
          </select>

          {/* Order */}
          <select name="order" value={formData.order.num} onChange={handleChange} className="select select-bordered w-full">
            {orders.map((session, i) => (
              <option key={session.num} value={session.num}>{`${i + 1} - ${session.time}`}</option>
            ))}
          </select>

          {/* TypeSeance */}
          <select name="type" value={formData.type} onChange={handleChange} className="select select-bordered w-full">
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          {/* Classe */}
          <select name="classeId" value={formData.classeId} onChange={handleChange} className="select select-bordered w-full">
            <option value="">Select Class</option>
            {classes.map((cls: any) => (
              <option key={cls.id} value={cls.id}>{cls.nomClasse}</option>
            ))}
          </select>

          {/* Module */}
          <select
            name="moduleId"
            value={formData.moduleId}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Select Module</option>
            {modules.map((mod) => (
              <option key={mod.idModule} value={mod.idModule}>
                {mod.nomModule}
              </option>
            ))}
          </select>


          {/* Prof */}
          <select name="profId" value={formData.profId} onChange={handleChange} className="select select-bordered w-full">
            <option value="">Select Professor</option>
            {profs.map((prof: any) => (
              <option
                key={prof.id}
                value={prof.id}
                disabled={prof.isBusy}
                title={prof.isBusy && prof.conflict ? `Occupé pour ${prof.conflict.module.nomModule}` : ""}
                className={prof.isBusy ? "text-red-500" : ""}
              >
                {prof.nomProf} {prof.prenomProf} {prof.isBusy ? " (Occupé)" : ""}
              </option>
            ))}
          </select>


          {/* Lieu */}
          <select
            name="lieuId"
            value={formData.lieuId}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Select Location</option>
            {lieux.map((lieu: LieuWithAvailability) => {
              const label =
                (lieu.typeLieu === "AMPHI")
                  ? `A. ${lieu.nomLieu}`
                  : (lieu.typeLieu === "SALLE") ? `Salle ${lieu.numeroSalle}` : "";

              return (
                <option
                  key={lieu.id}
                  value={lieu.id}
                  disabled={lieu.isBusy}
                  title={
                    lieu.isBusy && lieu.conflict
                      ? `Occupé pour ${lieu.conflict.module.nomModule}`
                      : ""
                  }
                  className={lieu.isBusy ? "text-red-500" : ""}
                >
                  {label} {lieu.isBusy ? " (Occupé)" : ""}
                </option>
              );
            })}
          </select>



          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button type="reset" onClick={handleReset} className="btn bg-gray-200 text-gray-700 hover:bg-gray-300">
              Reset
            </button>
            <button type="submit" className="btn bg-primary text-onPrimary hover:bg-secondary hover:text-white">
              Save
            </button>
          </div>
        </form>

        {modalProfId && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded shadow-lg w-80 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                onClick={() => setModalProfId(null)}
              >
                ✕
              </button>

              {(() => {
                const prof = profs.find((p: any) => p.id === modalProfId);
                const conflict = prof?.conflict;
                if (!conflict) return null;
                return (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-primary">Professeur occupé</h3>
                    <p><strong>Nom:</strong> {prof.nomProf} {prof.prenomProf}</p>
                    <p><strong>Module:</strong> {conflict.module.nomModule}</p>
                    <p><strong>Classe:</strong> {conflict.classe.nomClasse}</p>
                    <p><strong>Jour:</strong> {conflict.module.nomModule}</p>
                    <p><strong>Heure:</strong> {conflict.classe.nomClasse}</p>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>



    </div>
  );
}
