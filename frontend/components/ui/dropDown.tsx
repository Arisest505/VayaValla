import { ChevronDown } from "lucide-react";
import "../../styles/dropDownAnimation.css"

interface DropdownMenuProps {
  title: string;
  items: { label: string; href: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  return (
    <li className="relative group">
      <button className="flex items-center gap-1 text-white hover:bg-[#faf9f61a] px-2 py-1 rounded-lg transition">
        {title} <ChevronDown size={16} />
      </button>
      <div 
        className="absolute left-0 mt-[31px] w-[359px]  bg-[#121212]/90 backdrop-blur-lg text-white rounded-lg shadow-lg 
        invisible opacity-0 transform scale-95 transition-all duration-300 ease-in-out 
        group-hover:visible group-hover:opacity-100 group-hover:scale-100"
        style={{ transformOrigin: "top center" }}
      >
        {items.map((item, index) => (
          <a key={index} href={item.href} className="block mt-2 mb-1 mx-2 px-4 py-3 hover:bg-[#faf9f61a] rounded-lg transition">
            {item.label}
          </a>
        ))}
      </div>
    </li>
  );
};

export default DropdownMenu;