import React from "react";
import s from "./BurgerMenu.module.scss";

const BurgerMenu = ({nav, setNav}) => {
  return (
    <div className={s.burger_menu} onClick={() => setNav(!nav)}>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
