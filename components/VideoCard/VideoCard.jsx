import React from "react";
import s from "./VideoCard.module.scss";
import { CarVideos } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const VideoCard = ({ slideId, selectedVideo }) => {


  return (
    <>
      <Swiper
        navigation
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        initialSlide={slideId}
        className="SwiperVideo"
        autoplay={{ delay: 5000 }}
      >
        {CarVideos.map((video) => (
          <SwiperSlide key={video.id}>
            <video controls
      
            >
              <source src={video.video} type="video/mp4" />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VideoCard;
