import React, {useRef, useState} from "react";
import s from "./ReviewCard.module.scss";
import { Swiper, SwiperSlide,Navigation, Pagination, Autoplay } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const ReviewCard = ({ CarVideos }) => {
  console.log(CarVideos);

  // SwiperCore.use([Navigation, Pagination, Autoplay]);

  let mouseDown = false;
  let startX, startY;
  let threshold = 50; // Минимальное расстояние, чтобы считать свайп

  const handleMouseDown = (event) => {
    mouseDown = true;
    startX = event.clientX;
    startY = event.clientY;
  };

  const handleMouseMove = (event) => {
    if (!mouseDown) {
      return;
    }

    let currentX = event.clientX;
    let currentY = event.clientY;
    let diffX = startX - currentX;
    let diffY = startY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > threshold) {
        swiper.slideNext();
        mouseDown = false;
      } else if (diffX < -threshold) {
        swiper.slidePrev();
        mouseDown = false;
      }
    }
  };

  const handleMouseUp = () => {
    mouseDown = false;
  };

  let swiper = null;

  return (
    <div className={s.ReviewCard}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        slidesPerView={4}
        loop={true}
        grabCursor={true}
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiper = swiper;
        }}
        className="myReviewSwiper"
      >
        {CarVideos.map((item, id) => {
          return (
            <SwiperSlide key={id}>
              <iframe
                src={item.link}
                frameborder="0"
                width={"476px"}
                height={"740px"}
                allowFullScreen
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              ></iframe>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewCard;
