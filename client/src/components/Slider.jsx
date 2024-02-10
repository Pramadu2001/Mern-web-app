import "../styles/Slide.scss"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide className="slide-container">
  <img src={process.env.PUBLIC_URL + '/Assets/slide1.jpg'} alt="Beach Cat" />
  <div className="slide-content">
    <h1>
      "Embrace the Comfort! Wander Anywhere! Cherish the present. Craft unforgettable moments."
    </h1>
  </div>
</SwiperSlide >

        <SwiperSlide className="slide-container"><img src={process.env.PUBLIC_URL + '/Assets/slide2.jpg'} alt="Beach Cat" /> <div className="slide-content">
    <h1>
      "Embrace the Comfort! Wander Anywhere! Cherish the present. Craft unforgettable moments."
    </h1>
  </div></SwiperSlide>
        <SwiperSlide className="slide-container"><img src={process.env.PUBLIC_URL + '/Assets/slide3.jpg'} alt="Beach Cat" /> <div className="slide-content">
    <h1>
      "Embrace the Comfort! Wander Anywhere! Cherish the present. Craft unforgettable moments."
    </h1>
  </div></SwiperSlide>
        <SwiperSlide className="slide-container"><img src={process.env.PUBLIC_URL + '/Assets/slide4.jpg'} alt="Beach Cat" /> <div className="slide-content">
    <h1>
      "Embrace the Comfort! Wander Anywhere! Cherish the present. Craft unforgettable moments."
    </h1>
  </div></SwiperSlide>
        <SwiperSlide className="slide-container"><img src={process.env.PUBLIC_URL + '/Assets/slide5.jpg'} alt="Beach Cat" /> <div className="slide-content">
    <h1>
      "Embrace the Comfort! Wander Anywhere! Cherish the present. Craft unforgettable moments."
    </h1>
  </div></SwiperSlide>
        <SwiperSlide className="slide-container"><img src={process.env.PUBLIC_URL + '/Assets/slide6.jpg'} alt="Beach Cat" /> <div className="slide-content">
    <h1>
      "Embrace the Comfort! Wander Anywhere! Cherish the present. Craft unforgettable moments."
    </h1>
  </div></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;