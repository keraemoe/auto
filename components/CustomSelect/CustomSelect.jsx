import React from "react";
import s from "./CustomSelect.module.scss";
import cn from "classnames";

const CustomSelect = ({
  options,
  isOpen,
  setIsOpen,
  selectedOption,
  onClick,
}) => {
  
  return (
    <div
      className={
        isOpen ? cn(s.customized_select, s.is_open) : s.customized_select
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
              className={s.select__list__item}
              key={option.id}
              onClick={() => onClick(option.label)}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
      {/* select__list */}
    </div>
    // customized_select, is_open
  );
};

export default CustomSelect;
