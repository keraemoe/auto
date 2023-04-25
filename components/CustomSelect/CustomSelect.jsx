import React from "react";
import s from "./CustomSelect.module.scss";
import cn from "classnames";

const CustomSelect = ({
  classNameNavBurgerMenu,
  options,
  isOpen,
  setIsOpen,
  selectedOption,
  onClick,
}) => {
  
  return (
    <div
      className={
        isOpen ? cn(s.mySelect, s.open, classNameNavBurgerMenu) : cn(s.mySelect, classNameNavBurgerMenu)
      }
    >
      <span
        className={s.select__placeholder}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
      </span>
      {/* select__placeholder */}

      <ul className={s.select__list}>
        {options.map((option) => {
          return (
             <li
              className={s.select__item}
              key={option.id}
              onClick={() => onClick(option.label)}
            >
              {option.label}
            </li>
            // selectSelect__item
          );
        })}
      </ul>
      {/* selectSelect__list */}
    </div>
    // select, open
  );
};

export default CustomSelect;
