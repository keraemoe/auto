import React, { useState } from "react";
import s from "./BurgerMenu.module.scss";

import NavBurgerMenu from "../NavBurgerMenu/NavBurgerMenu";

const BurgerMenu = () => {
  // Состояние - навигационного бургер меню
  const [nav, setNav] = useState(false);
  
  return (
    <div className={s.burger_menu} onClick={() => setNav(!nav)}>
      <span></span>
      <span></span>
      <NavBurgerMenu nav={nav} setNav={setNav}/>
    </div>
  );
};

export default BurgerMenu;
