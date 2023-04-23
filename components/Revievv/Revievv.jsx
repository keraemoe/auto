import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import s from "./Revievv.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import sldie1 from "../../public/lol.jpg";
import sldie2 from "../../public//lol1.png";
import sldie3 from "../../public/lol2.png";
import sldie4 from "../../public/okkk.jpg";
import slide from "../../assets/Merc.png";
import slideTwo from "../../assets/Classic.png";
import slideThree from "../../assets/Classic2.png";
import slideFour from "../../assets/Audi.png";

const Revievv = () => {
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
  
    console.log(slide);
    return (
      <>
        <div className={s.container}>
          <div className={s.content} id="architecture">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
            >
            </motion.h1>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
            >
            REVIEWS
            </motion.h1>
            <div className={s.slider}></div>
            <div className={s.info}>
              <motion.span
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                className={s.tag}
              >
                <div className={s.sliderR_block}>
                  <div className={s.sliderR_slide}>
                    <img
                      onClick={() => setOpen(true)}
                      className={s.sldie1}
                      src={sldie1}
                      alt="logo"
                      placeholder="blur"
                    />
                    <img
                      placeholder="blur"
                      onClick={() => setOpen(true)}
                      className={s.sldie2}
                      src={sldie2}
                      alt="logo"
                    />
                    <img
                      placeholder="blur"
                      onClick={() => setOpen(true)}
                      className={s.sldie3}
                      src={sldie3}
                      alt="logo"
                    />
                  </div>
                  <div class={s.container_img} onClick={() => setOpen(true)}>
                    <img
                      onClick={() => setOpen(true)}
                      className={s.sldie4}
                      src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="logo"
                      placeholder="blur"
                    />
                    <div class={s.overlay}>
                      <p>посмотреть галерею</p>
                    </div>
                  </div>
                </div>{" "}
              </motion.span>
              <br />
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -100 },
                }}
                className={s.under_tag}
              >
              </motion.div>
            </div>
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
        </div>
      </>
    );
  };
  
  export default Revievv;