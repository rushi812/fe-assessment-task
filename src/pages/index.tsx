import Header from "@/components/Header";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleCreateJob = () => {
    setOpen((prev) => !prev);
  };

  return (
    <main>
      <Header onClick={handleCreateJob} />
      <Modal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
