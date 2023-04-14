import React, { useState } from "react";
import s from "./Header.module.scss";

import CustomSelect from "../CustomSelect/CustomSelect";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";
import NavBurgerMenu from "../NavBurgerMenu/NavBurgerMenu";

const optionsCity = [
  { id: 1, value: "one", label: "Dubai" },
  { id: 2, value: "two", label: "Moscow" },
  { id: 3, value: "three", label: "Budapest" },
  { id: 4, value: "four", label: "Wiesbaden" },
];

const optionsLanguage = [
  { id: 5, value: "five", label: "ENG" },
  { id: 6, value: "six", label: "RUS" },
  { id: 7, value: "seven", label: "KGZ" },
  { id: 8, value: "eigth", label: "XZ" },
];

const Header = () => {
  // dubai
  const [optionsCityState, setOptionsCityState] = useState(
    optionsCity[0].label
  );

  const [cityOpen, setCityOpen] = useState(false);

  const handleOptionClickCity = (value) => {
    console.log("City", cityOpen);
    setCityOpen(!cityOpen);
    setOptionsCityState(value);
  };

  // Eng
  const [optionsLanguageState, setOptionsLanguageState] = useState(
    optionsLanguage[0].label
  );
  const [languageOpen, setLanguageOpen] = useState(false);

  const handleOptionClickLanguage = (value) => {
    console.log("language", languageOpen);
    setLanguageOpen(!languageOpen);
    setOptionsLanguageState(value);
  };

  // Состояние - навигационного бургер меню
  const [nav, setNav] = useState(false);

  return (
    <header className={s.header}>
      <nav className={s.header_nav}>

          <BurgerMenu setNav={setNav} nav={nav}/>
          <NavBurgerMenu nav={nav}/>

        <ul className={s.left_ul}>
          <li className={s.left_ul_li}>
            <a href="#">Car List</a>
          </li>
          <li className={s.left_ul_li}>
            <a href="#">About Us</a>
          </li>
          <li className={s.left_ul_li}>
            <a href="#">Contacts</a>
          </li>
        </ul>
        {/* left_ul */}

        <Logo classNameLogoHeader={s.header_logo}/>

        <ul className={s.right_ul}>
          <li className={s.right_ul_number}>+971 58 590 7875</li>

          <CustomSelect
            options={optionsCity}
            isOpen={cityOpen}
            setIsOpen={setCityOpen}
            onClick={handleOptionClickCity}
            selectedOption={optionsCityState}
          />
          <CustomSelect
            options={optionsLanguage}
            isOpen={languageOpen}
            setIsOpen={setLanguageOpen}
            onClick={handleOptionClickLanguage}
            selectedOption={optionsLanguageState}
          />
        </ul>
        {/* right_ul */}
      </nav>
      {/* nav */}
    </header>
    // header
  );
};

export default Header;
