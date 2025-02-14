import { useState } from "react";

export function useDropdown() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  return { openSections, toggleSection };
}
