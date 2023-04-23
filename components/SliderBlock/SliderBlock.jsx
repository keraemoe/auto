import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./SliderBlock.module.scss";
import { Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Navigation } from "swiper";

const data = {
  title: "Lamborghini",
  description: "Huracan EVO Spyder ",
  image:'./car.png',
  
};

const SliderBlock = () => {
  return (
    <div className={s.slider}>
      <div className={s.slider__item_first}>
        <h1 className={s.sliderImage__title}>
          Rent Lamborghini <br /> Huracan STO
        </h1>
        <div className={s.sliderImage_text}>
          <p>Rent is from aed</p>
          <h1 className={s.sliderImage_price}>2 400$</h1>
          <p>per day</p>
        </div>
        <img src="./car.png" alt="car" />
      </div>
      <div className={s.slider__item_second}>
        <h1 className={s.slider__title}>Most Popular</h1>
        <input className={s.slider___search} placeholder="Car search" />
        <Swiper
          className="my-slider"
          slidesPerView={5}
          centeredSlidesBounds={true}
          centeredSlides={true}
          loop={true}
          loopedSlides={2.5}
          spaceBetween={50}
          simulateTouch={false}
          grabCursor={false}
          navigation={true}
          scrollbar={{
            hide: false,
          }}
          direction={"vertical"}
          modules={[Navigation, Scrollbar]}
        >
          <SwiperSlide>
            <div className="my-slide__item">
              <h1>Audi</h1> <p>Huracan EVO Spyder RS6</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-slide__item">
              <h1>Lamborghini</h1> <p>Huracan EVO Spyder </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-slide__item">
              <h1>Lamborghini</h1> <p>Urus</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-slide__item">
              <h1>Audi</h1> <p>Huracan EVO Spyder RS6</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-slide__item">
              <h1>Lamborghini</h1> <p>Huracan EVO Spyder </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-slide__item">
              <h1>Lamborghini</h1> <p>Urus</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className={s.slider_button}>View all</button>
      </div>
    </div>
  );
};

export default SliderBlock;
