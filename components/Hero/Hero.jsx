import React from "react";
import s from "./Hero.module.scss";

import SocialNetwork from "../SocialNetwork/SocialNetwork";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.hero_background}>
        <div className={s.hero_gradient}>
          <div className={s.hero_title}>
            <h1>Dubai</h1>
            <p>luxury car rental</p>
          </div>
          {/* hero_title */}
          <SocialNetwork />
        </div>
        {/* hero_gradient */}
      </div>
      {/* hero_background */}
    </section>
    // hero
  );
};

export default Hero;
