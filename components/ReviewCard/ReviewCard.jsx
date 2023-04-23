import React, { useRef, useState } from "react";
import s from "./ReviewCard.module.scss";
import { CarVideos } from "../../constants/constants";
import { Swiper, SwiperSlide, Navigation, Pagination } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// Import Swiper styles
import "swiper/css";
import slide from "../../assets/Merc.png";
import slideTwo from "../../assets/Classic.png";
import slideThree from "../../assets/Classic2.png";
import slideFour from "../../assets/Audi.png";

const ReviewCard = () => {
  console.log(CarVideos);

  const [open, setOpen] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(500);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = useState(2);
  const [keyboardMoveDistance, setKeyboardMoveDistance] = useState(50);
  const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] = useState(100);
  const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] =
    React.useState(100);
  const [scrollToZoom, setScrollToZoom] = React.useState(false);

  return (
    <div className={s.ReviewCard}>
      <Swiper
        speed={2000}
        slidesPerView={4}
        className="myReviewSwiper"
        breakpoints={{
          320:{

            width:320, 
            slidesPerView:2,
            spaceBetween:10
          },
          425:{
            width:425,
            slidesPerView:2,
            spaceBetween:10
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 3,
            spaceBetween:10
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
            spaceBetween:10
          },
          1024:{
            width: 1024,
            slidesPerView: 4,
            spaceBetween:10
          },
          1440:{
            width: 1440,
            slidesPerView:4,
            spaceBetween:10
          },
          1920:{
            width: 1920,
            slidesPerView:4,
            spaceBetween:10,
          }
        }}
      >
        {CarVideos.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              id={item.id}
              onClick={() => setOpen(true)}
            >
              <img src={item.link} alt="img" />
              <div className={s.overlay}>
                <p>VISIT THE GALLERY</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        Keyboard
        slides={[
          { src: slide.src },
          { src: slideTwo.src },
          { src: slideThree.src },
          { src: slideFour.src },
        ]}
        plugins={[Captions, Zoom]}
        animation={{ zoom: animationDuration }}
        zoom={{
          maxZoomPixelRatio,
          zoomInMultiplier,
          doubleTapDelay,
          doubleClickDelay,
          doubleClickMaxStops,
          keyboardMoveDistance,
          wheelZoomDistanceFactor,
          pinchZoomDistanceFactor,
          scrollToZoom,
        }}
      />
    </div>
  );
};

export default ReviewCard;
