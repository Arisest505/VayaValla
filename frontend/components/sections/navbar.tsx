import { useState, useEffect } from "react";
import HamburgerToggle from "../ui/HamburgerIcon";
import DropdownMenu from "../ui/dropDown";
import MobileMenu from "../ui/MobileMenu";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuWidth, setMenuWidth] = useState(""); 
  const [navWidth, setNavWidth] = useState("");   
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true); 

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 960);
      setNavWidth(`calc(100% - ${width <= 960 ? "40px" : "80px"})`);
      setMenuWidth(`calc(100% - ${width <= 960 ? "40px" : "80px"})`);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <nav className="fixed top-4 left-0 right-0 mx-auto z-50 bg-[#29292980] border-gray-600 rounded-xl shadow-md px-8 py-5 flex items-center justify-between" style={{ maxWidth: navWidth }}>
      {/* Logo */}
      <div className="flex items-center gap-5">
        <a href="/" className="flex items-center gap-2">
          <img src="/img/logo-vaya-soloicono2.webp" alt="Logo" height={40} width={40} />
          <span className="text-lg font-bold tracking-wider text-white">Vaya Valla</span>
        </a>
        {/* Menú */}
        {!isMobile && (
          <ul className="hidden md:flex items-center gap-6">
            <DropdownMenu title="Features" items={[{ label: "Modern UX", href: "#" }, { label: "AI Tools", href: "#" }, { label: "Warp Drive", href: "#" }]} />
            <DropdownMenu title="Resources" items={[]} />
            <li>
              <a href="/pricing" className="text-white hover:bg-[#faf9f61a] px-2 py-1 rounded-lg transition">Pricing</a>
            </li>
          </ul>
        )}
      </div>
      {/* Botones de acción */}
      {!isMobile && (
        <div className="hidden md:flex items-center gap-4">
          <a href="/contact-sales" className="text-white hover:bg-[#faf9f61a] px-3 py-2 rounded-lg transition font-medium">Contact Sales</a>
          <a href="/download" className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition font-medium">Download Warp</a>
        </div>
      )}
      {/* Menú móvil */}
      {isMobile && <HamburgerToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />}
      {isMobile && <MobileMenu isOpen={isOpen} menuWidth={menuWidth} navWidth={navWidth} />}
    </nav>
  );
}
