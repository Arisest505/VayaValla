// import React from "react";
// import "../../styles/mobileMenuAnimation.css";

// interface MobileMenuProps {
//   isOpen: boolean;
//   menuWidth: string;
//   navWidth: string;
// }

// const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, menuWidth, navWidth }) => {
//   return (
//     <div
//   className={`absolute  mt-[279px] bg-[#121212]/90 backdrop-blur-lg text-white rounded-lg shadow-lg 
//     transition-all duration-300 ease-in-out 
//     ${isOpen ? "scale-up-top opacity-100" : "scale-down-top opacity-0"}`}
//   style={{
//     transformOrigin: "top center",
//     overflow: "hidden",
//     visibility: isOpen ? "visible" : "hidden",
//     width: menuWidth, 
//     maxWidth: navWidth, 
//   }}
// >

//       <a href="#" className="block mt-2 mb-1 mx-2 px-4 py-3 hover:bg-[#faf9f61a] rounded-lg transition">
//         Modern UX
//       </a>
//       <a href="#" className="block mt-2 mb-1 mx-2 px-4 py-3 hover:bg-[#faf9f61a] rounded-lg transition">
//         AI Tools
//       </a>
//       <a href="#" className="block mt-2 mb-1 mx-2 px-4 py-3 hover:bg-[#faf9f61a] rounded-lg transition">
//         Warp Drive
//       </a>
//     </div>
//   );
// };

// export default MobileMenu;
import React from "react";
import "../../styles/mobileMenuAnimation.css";

interface MobileMenuProps {
  isOpen: boolean;
  menuWidth: string;
  navWidth: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, menuWidth, navWidth }) => {
  return (
    <div
      className={`absolute left-5 mt-[279px] bg-[#121212]/90 backdrop-blur-lg text-white rounded-lg shadow-lg 
        transition-all duration-300 ease-in-out 
        ${isOpen ? "scale-up-top opacity-100" : "scale-down-top opacity-0"}`}
      style={{
        transformOrigin: "top center",
        overflow: "hidden",
        visibility: isOpen ? "visible" : "hidden",
        width: navWidth, // Ahora usa el mismo ancho que el Navbar
      }}
    >
      <a href="#" className="block mt-2 mb-1 mx-2 px-4 py-3 hover:bg-[#faf9f61a] rounded-lg transition">
        Modern UX
      </a>
      <a href="#" className="block mt-2 mb-1 mx-2 px-4 py-3 hover:bg-[#faf9f61a] rounded-lg transition">
        AI Tools
      </a>
      <a href="#" className="block mt-2 mb-1 mx-2 px-4 py-3 hover:bg-[#faf9f61a] rounded-lg transition">
        Warp Drive
      </a>
    </div>
  );
};

export default MobileMenu;
