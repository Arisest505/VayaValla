"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number; // Tiempo de retraso antes de iniciar el movimiento
  duration: number; // Duración del movimiento
}

const HeroWithShootingStars = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generar partículas iniciales
    const generateParticles = () => {
      const numParticles = 55; // Cantidad de partículas
      const newParticles: Particle[] = Array.from({ length: numParticles }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth, // Posición inicial X
        y: Math.random() * window.innerHeight * 0.5, // Posición inicial Y (en la mitad superior)
        size: Math.random() * 10, // Tamaño aleatorio
        delay: Math.random() * 5, // Retraso aleatorio
        duration: Math.random() * 2 + 1, // Duración aleatoria del movimiento
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener("resize", generateParticles);

    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-800 to-black">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-blue-600 to-black opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Partículas flotantes (Estrellas Fugaces) */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white rounded-full"
          style={{
            top: particle.y,
            left: particle.x,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            x: [particle.x, particle.x + Math.random() * 200],
            y: [particle.y, particle.y + Math.random() * 200],
            opacity: [3, 0], // Se desvanece
          }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Contenido del Hero */}
      <div className="container mx-auto text-center text-white z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros <span className="text-[#000000]">Servicios</span>
        </motion.h1>

        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crea un ambiente mágico con partículas que simulan estrellas fugaces dinámicas y envolventes.
        </motion.p>

        <motion.a
          href="#explore"
          className="bg-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition"
          whileHover={{ scale: 1.1 }}
        >
          Explorar
        </motion.a>
      </div>
    </section>
  );
};

export default HeroWithShootingStars;
