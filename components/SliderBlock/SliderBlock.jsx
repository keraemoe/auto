import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./SliderBlock.module.scss";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const SliderBlock = () => {
  return (
    <div className={s.slider}>
      <div className={s.slider__item_first}>
        <Swiper className="slider-image">
          <SwiperSlide><img src="" alt="" /></SwiperSlide>
        </Swiper>
      </div>
      <div className={s.slider__item_second}>
        <h1 className={s.slider__title}>Most Popular</h1>
        <input className={s.slider___search}></input>
        <Swiper
          className="slider-title"
          slidesPerView={5}
          loop={true}
          grabCursor={true}
          navigation={true}
          direction={"vertical"}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div className="slider-title__item_first">
              <h1>Audi</h1> <p>Huracan EVO Spyder RS6</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-title__item_second">
              <h1>Lamborghini</h1> <p>Urus</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-title__item_third">
              <h1>Lamborghini</h1> <p>Huracan EVO Spyder </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-title__item_second">
              <h1>Lamborghini</h1> <p>Urus</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-title__item_first">
              <h1>Audi</h1> <p>Huracan EVO Spyder RS6</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-title__item_first">
              <h1>Audi</h1> <p>Huracan EVO Spyder RS6</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-title__item_second">
              <h1>Lamborghini</h1> <p>Urus</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-title__item_third">
              <h1>Lamborghini</h1> <p>Huracan EVO Spyder </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderBlock;
