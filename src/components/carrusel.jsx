import React from "react";
import product1 from "../assets/images/image-product-1.jpg"
import product2 from "../assets/images/image-product-2.jpg"
import product3 from "../assets/images/image-product-3.jpg"
import product4 from "../assets/images/image-product-4.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Carrusel(props) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className={props.class}> 
        <SwiperSlide><img src={product1} alt="product-1" /></SwiperSlide>
        <SwiperSlide><img src={product2} alt="product-2" /></SwiperSlide>
        <SwiperSlide><img src={product3} alt="product-3" /></SwiperSlide>
        <SwiperSlide><img src={product4} alt="product-4" /></SwiperSlide>
      </Swiper>
    </>
  );
}