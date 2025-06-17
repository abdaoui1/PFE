"use client";
import { useState } from "react";

export default function SessionForm({ defaultDay, defaultNum, onClose }: {
  defaultDay: string;
  defaultNum: number;
  onClose: () => void;
}) {
    console.log("🟩🟩🟩Rendered form");
  const [formData, setFormData] = useState({
    moduleId: "",
    profId: "",
    day: defaultDay,
    numeroSeance: defaultNum,
    // other fields
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Send POST to /api/seance or call action
    console.log("Submit", formData);
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input type="text" placeholder="Module ID" value={formData.moduleId} onChange={e => setFormData({ ...formData, moduleId: e.target.value })} />
      {/* Other inputs */}
      <button type="submit">Save</button>
    </form>
  );
}
