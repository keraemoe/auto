import React from "react";
import s from "./BurgerMenu.module.scss";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

const BurgerMenu = ({ nav, setNav }) => {
  // Состояние - для запрета прокрутки когда модалка открыта
  const [isLocked, setIsLocked] = useBodyScrollLock();

  // Function - для setNav и isLocked
  const handleClick = () => {
    setNav(!nav);
    setIsLocked(!isLocked);
  };

  return (
    <div className={s.container} onClick={handleClick}>
      <div className={s.burgerMenu}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BurgerMenu;
