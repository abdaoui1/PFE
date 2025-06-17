"use client";

import { useState } from "react";
import { Drawer } from "./ui/drawer"; // or custom component
import SessionForm from "./sessionForm";

export default function SessionDrawer({ day, num }: { day: string, num: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-blue-600 hover:underline"
      >
        Add
      </button>

     {open && (
     <Drawer open={open} onClose={() => setOpen(false)}>
        <SessionForm
          defaultDay={day}
          defaultNum={num}
          onClose={() => setOpen(false)}
        />
      </Drawer>
         )}
    </>
  );
}
