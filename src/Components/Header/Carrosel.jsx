import React from 'react';
import img2 from "../../assets/carrosel/consultorio.jpg"
import img3 from "../../assets/carrosel/dentista-atendendo.jpg"
import img1 from "../../assets/carrosel/dentistas-da-clinica.jpg"
import img4 from "../../assets/carrosel/atendemos-publico-infantil.jpg"
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Carrosel = () => {
    return (
        <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={true}
            autoplay={true}
            navigation={true}
            style={
                {
                    width: "85%",
                    borderRadius: "20px",
                }}
        >
            <ul>
                <SwiperSlide>
                    <li><img src={img1} alt="nossas instalações" width="100%" /></li>
                </SwiperSlide>
                <SwiperSlide>
                    <li><img src={img2} alt="nossos profissionais" width="100%" /></li>
                </SwiperSlide>
                <SwiperSlide>
                    <li><img src={img3} alt="nossos procedimentos" width="100%" /></li>
                </SwiperSlide>
                <SwiperSlide>
                    <li><img src={img4} alt="atendendo você com sorriso no rosto" width="100%" /></li>
                </SwiperSlide>
            </ul>

        </Swiper>
    )
}

export default Carrosel;