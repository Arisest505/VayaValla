import * as React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useDropdown } from "../hook/DropDownMenuMobile";

interface MenuItem {
  title: string;
  description?: string;
  items?: MenuItem[];
}

interface DropdownMenuProps {
  items: MenuItem[];
  onHeightChange: (height: number) => void;
}

export function DropdownMenu({ items, onHeightChange }: DropdownMenuProps) {
  const { openSections, toggleSection } = useDropdown();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [dropdownHeights, setDropdownHeights] = React.useState<{ [key: string]: number }>({});

  React.useEffect(() => {
    let totalHeight = 0;
    if (containerRef.current) {
      items.forEach((item) => {
        const section = document.getElementById(`section-${item.title}`);
        if (section) {
          dropdownHeights[item.title] = section.scrollHeight;
        }
      });

      totalHeight = Object.keys(dropdownHeights)
        .filter((key) => openSections.includes(key))
        .reduce((acc, key) => acc + dropdownHeights[key], 0);

      onHeightChange(containerRef.current.scrollHeight + totalHeight);
    }
  }, [openSections, onHeightChange]);

  return (
    <div ref={containerRef} className="w-full rounded-lg bg-[#121212]/90 text-white p-2 transition-all duration-300 ease-in-out">
      {items.map((item) => (
        <div key={item.title} className="relative">
          <button
            onClick={() => toggleSection(item.title)}
            className={`flex w-full items-center justify-between rounded-md px-4 py-2 text-left text-sm transition-colors hover:bg-[#faf9f61a] ${
              openSections.includes(item.title) && "bg-[#faf9f61a]"
            }`}
          >
            <span className="font-medium">{item.title}</span>
            {item.items && (
              <span className="ml-2">
                {openSections.includes(item.title) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </span>
            )}
          </button>
          {item.items && (
            <div
              id={`section-${item.title}`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openSections.includes(item.title) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {openSections.includes(item.title) &&
                item.items.map((subItem) => (
                  <div key={subItem.title} className="rounded-md px-3 py-2 transition-colors hover:bg-[#faf9f61a]">
                    <div className="font-medium">{subItem.title}</div>
                    {subItem.description && <p className="text-sm text-zinc-400">{subItem.description}</p>}
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
