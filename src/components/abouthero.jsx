import React from "react";
import { motion } from "framer-motion";
import bg from '../assets/imagens/an3.jpg';

const About = () => {
  return (
    <div className="relative flex justify-center items-center px-4 min-h-screen">
      {/* Fundo com imagem centralizada, coberta e borrada */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover filter blur-md"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Conteúdo animado por cima */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
        className="
          relative z-10 bg-white/80 max-w-2xl w-full p-8 mx-8 rounded-lg shadow-md
          transition-opacity transition-transform duration-700 ease-in-out delay-200
          hover:scale-105 hover:rotate-1 hover:shadow-lg
        "
      >
        <h1 className="text-2xl font-bold mb-4 text-red-500">
          Achei meio complicado no começo e até meio confuso!
        </h1>
        <p className="text-gray-700">
           E até pensei que não iria conseguir fazer sozinha e fiquei bem perdida, no começo meio e fim :( Mas no final deu tudo certo com as animações e estilizações 
           dentro do site! com o auxilio do chatgpt, e fiquei bem feliz com todo o aprendizado, apesar de todas as dificuldades vi que me sai bem sim!sofri mas me sai bem sim
        </p>
      </motion.div>
    </div>
  );
};

export default About;









































