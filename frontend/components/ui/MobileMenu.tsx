import React, { useState, useEffect } from "react";
import "../../styles/mobileMenuAnimation.css";
import { DropdownMenu } from "./hook/MobileMenuOpciones";

interface MobileMenuProps {
  isOpen: boolean;
  menuWidth: string;
  navWidth: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, menuWidth, navWidth }) => {
  const [menuHeight, setMenuHeight] = useState("0px");

  const handleHeightChange = (height: number) => {
    if (isOpen) {
      setMenuHeight(`${height}px`);
    } else {
      setMenuHeight("0px");
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setMenuHeight("0px");
    }
  }, [isOpen]);

  const menuItems = [
    {
      title: "Modern UX",
      items: [
        { title: "UI/UX Trends", description: "Latest trends in UI/UX", href: "#" },
        { title: "Best Practices", description: "Improve usability", href: "#" },
      ],
    },
    {
      title: "AI Tools",
      items: [
        { title: "ChatGPT", description: "AI-powered chat", href: "#" },
        { title: "DALL·E", description: "Generate images with AI", href: "#" },
      ],
    },
    {
      title: "Warp Drive",
      items: [{ title: "Fast Performance", description: "Optimize your workflow", href: "#" }],
    },
  ];

  return (
    <div
      className={`absolute left-5 top-[100px] bg-[#121212]/90 backdrop-blur-lg text-white rounded-lg shadow-lg 
        transition-all duration-300 ease-in-out ${isOpen ? "scale-up-top opacity-100" : "scale-down-top opacity-0"}`}
      style={{
        transformOrigin: "top center",
        visibility: isOpen ? "visible" : "hidden",
        width: navWidth,
        height: menuHeight, // Ajusta la altura acumulada de los dropdowns abiertos
        overflow: "hidden",
      }}
    >
      <DropdownMenu items={menuItems} onHeightChange={handleHeightChange} />
    </div>
  );
};

export default MobileMenu;
