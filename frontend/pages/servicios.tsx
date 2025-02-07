import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroServicios from "@/components/sections/ServiceSect/HeroServicios";
import ListServicios from "@/components/sections/ServiceSect/ListServicios";
import MoreServicios from "@/components/sections/ServiceSect/MoreServicios";

const servicios = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <HeroServicios />
        <ListServicios />
        <MoreServicios />
      </main>
      <Footer />
    </div>
  );
};

export default servicios;
