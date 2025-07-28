import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import bg from '../assets/imagens/ez2.jpg';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Div com a imagem de fundo */}
      <div
      className="mt-8"
      >
        <Hero 
        img={bg}
          titulo="Pousada urbana"
          paragrafo="Conheça nossas atrações"
          rota="#"
          botao="Saiba mais"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;