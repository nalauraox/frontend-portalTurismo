import React from "react";
import CardService from "./cardService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules'; // 👈 Importa autoplay
import 'swiper/css';

import catedral from "../assets/imagens/catedral.jpg";
import cristo from "../assets/imagens/cristo.jpg";
import marques from "../assets/imagens/marques.jpg";
import mercadao from "../assets/imagens/mercadao.jpg";
import praca from "../assets/imagens/praca.jpg";
import teatro from "../assets/imagens/teatro.jpg";

const tourist_places = [
    { Image: catedral, title: "Catedral de Pouso Alegre", description: "Ponto turístico religioso" },
    { Image: cristo, title: "Cristo Redentor", description: "Ponto turístico religioso" },
    { Image: marques, title: "Marques Plaza", description: "Hotel 4 estrelas" },
    { Image: mercadao, title: "Mercadão Municipal", description: "Melhor lugar para comprar presentes" },
    { Image: praca, title: "Praça de Pouso Alegre", description: "Praça Senador José Bento" },
    { Image: teatro, title: "Teatro Municipal", description: "Venha prestigiar nossos artistas municipais" }
];

const Carousel = () => {
    return (
        <div className="relative z-10 w-full">
            <h1 className="text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
                Pontos turísticos locais mais visitados
            </h1>
            <Swiper
                modules={[Autoplay]} // 👈 Habilita o módulo
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                slidesPerView="auto"
                spaceBetween={20}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }}
            >
                {tourist_places.map((place, index) => (
                    <SwiperSlide key={index}>
                        <CardService
                            img={place.Image}
                            alt={place.description}
                            titulo={place.title}
                            descricao={place.description}
                            link="#"
                            botao="Saiba Mais"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;