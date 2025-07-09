import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import oi4 from '../assets/imagens/oi4.png';
import Carousel from "../components/carousel";

const ServicePage = () => {
    return (
        <>
        
        
            <div className="flex flex-col min-h-screen ">
                <Navbar/>
                <div className="font-semibold"
            >
                </div>
                
                    <Hero img = {oi4}  titulo = "Portal de Serviços" paragrafo="Venha conhecer os mais diversos serviços de turismo" rota="#" botao="Conhecer Agora" />
                    <div>
                        <Carousel/>
                    </div>
                </div>
                    <Footer />
            
            
        </>
    )
}

export default ServicePage;