import React from "react";
import s from "./Hero.module.scss";

import SocialNetwork from "../SocialNetwork/SocialNetwork";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.hero__background}>
        <div className={s.hero__gradient}>
          <div className={s.hero__title}>
            <h1>Dubai</h1>
            <p>luxury car rental</p>
          </div>
          {/* hero__title */}

          <SocialNetwork classNameHero={s.hero__social} />
          {/* hero__social */}
        </div>
        {/* hero__gradient */}
      </div>
      {/* hero__background */}
    </section>
    // hero
  );
};

export default Hero;
