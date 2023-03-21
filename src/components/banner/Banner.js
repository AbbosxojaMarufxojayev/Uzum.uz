import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

function Banner() {
  return (
    <div className='container banner'>
        <Swiper 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        loop={true} 
        navigation={true}
        modules={[Navigation, Autoplay]} 
        className="mySwiper">
            <SwiperSlide><img src="https://images.uzum.uz/cfublbng49devoa9a0fg/main_page_banner.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images.uzum.uz/cfpkiunhgiov1qici6pg/main_page_banner.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images.uzum.uz/cg9a8kfhj8j9g69a2ro0/main_page_banner.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images.uzum.uz/cg3c2bnhj8j9g6998t6g/main_page_banner.jpg" alt="" /></SwiperSlide>
        </Swiper>
    </div>
)
}

export default Banner