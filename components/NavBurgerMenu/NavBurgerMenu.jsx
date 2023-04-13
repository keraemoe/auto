import React from "react";
import s from "./NavBurgerMenu.module.scss";

import cn from "classnames";

const NavBurgerMenu = ({nav}) => {
  return (
    <div
      className={nav ? cn(s.menu_collapsed, s.menu_expanded) : s.menu_collapsed}
    ></div>
  );
};

export default NavBurgerMenu;
