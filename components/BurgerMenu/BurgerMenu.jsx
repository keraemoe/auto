import React from "react";
import s from "./BurgerMenu.module.scss";

const BurgerMenu = ({ nav, setNav }) => {
  return (
    <div className={s.container} onClick={() => setNav(!nav)}>
      <div className={s.burgerMenu}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BurgerMenu;
