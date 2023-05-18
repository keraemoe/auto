import React, { useEffect, useRef, useState } from "react";
import s from "./ReviewCard.module.scss";
import { CarVideos } from "../../constants/constants";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide, Navigation, Pagination } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "swiper/css";
import { Modal } from "antd";
import ShowCarsCardForModal from "../ShowCarsCardForModal/ShowCarsCardForModal";
import { motion } from "framer-motion";
import VideoCard from "../VideoCard/VideoCard";
const ReviewCard = () => {
  console.log(CarVideos);

  const [open, setOpen] = useState(false);
  const [carVideos, setCarVideos] = useState(
    CarVideos.map((item) => ({ ...item, isHovered: false }))
  );
  const [slideId, setSlideId] = useState(0);

  const changeId = (id) => {
    setSlideId(id);
  };

  const handleMouseEnter = (id) => {
    const updatedCarVideos = carVideos.map((item) => ({
      ...item,
      isHovered: item.id === id ? true : false,
    }));
    setCarVideos(updatedCarVideos);
  };

  const handleMouseLeave = () => {
    const updatedCarVideos = carVideos.map((item) => ({
      ...item,
      isHovered: false,
    }));
    setCarVideos(updatedCarVideos);
  };

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleImageClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className={s.ReviewCard}>
      <Swiper
        speed={2000}
        slidesPerView={4}
        autoplay={{ delay: 1000 }}
        className="myReviewSwiper"
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 2,
          },
          360: {
            width: 360,
            slidesPerView: 2,
          },
          375: {
            width: 375,
            slidesPerView: 2,
          },
          425: {
            width: 425,
            slidesPerView: 2,
          },
          455: {
            width: 455,
            slidesPerView: 2,
          },
          485: {
            width: 480,
            slidesPerView: 2,
          },
          500: {
            width: 500,
            slidesPerView: 2,
          },
          525: {
            width: 525,
            slidesPerView: 2,
          },
          545: {
            width: 545,
            slidesPerView: 2,
          },
          565: {
            width: 565,
            slidesPerView: 2,
          },
          585: {
            width: 585,
            slidesPerView: 2,
          },
          605: {
            width: 605,
            slidesPerView: 2,
          },
          625: {
            width: 625,
            slidesPerView: 2,
          },
          645: {
            width: 645,
            slidesPerView: 2,
          },
          // when window width is >= 640px
          660: {
            width: 660,
            slidesPerView: 2,
          },
          685: {
            width: 625,
            slidesPerView: 2,
          },
          706: {
            width: 706,
            slidesPerView: 2,
          },
          726: {
            width: 726,
            slidesPerView: 2,
          },
          746: {
            width: 746,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
          1366: {
            width: 1366,
            slidesPerView: 4,
          },
          1440: {
            width: 1440,
            slidesPerView: 4,
          },
          1920: {
            width: 1920,
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
      >
        {carVideos.map((item) => (
          <SwiperSlide
            key={item.id}
            id={item.id}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setOpen(true)}
          >
            <video src={item.video} alt="img" />
            {item.isHovered && (
              <motion.div
                className={`${s.overlay} ${
                  item.isHovered ? s.overlayVisible : ""
                }`}
                initial="hidden"
                transition={{ duration: 0.1 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0.1 },
                  visible: { scale: 1 },
                }}
                onClick={() => {changeId(item.id),handleImageClick(item.id)}}
             
              >
                <img src="/play.png" alt="play" />
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        footer={false}
        centered
        open={open}
        closable={true}
        onCancel={() => setOpen(false)}
        width={1170}
        className="modalStyle"
      >
        <VideoCard CarVideos={CarVideos} slideId={slideId}  />
      </Modal>
    </div>
  );
};

export default ReviewCard;
