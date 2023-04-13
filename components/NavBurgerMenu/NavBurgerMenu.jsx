import React, { useState } from "react";
import s from "./NavBurgerMenu.module.scss";

import cn from "classnames";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import CustomSelect from "../CustomSelect/CustomSelect";

const optionsLanguage = [
  { id: 5, value: "five", label: "ENG" },
  { id: 6, value: "six", label: "RUS" },
  { id: 7, value: "seven", label: "KGZ" },
  { id: 8, value: "eigth", label: "XZ" },
];

const NavBurgerMenu = ({ nav }) => {
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
  return (
    <div
      className={nav ? cn(s.menu_collapsed, s.menu_expanded) : s.menu_collapsed}
    >
      <div className={s.menu_gradient}>
        <header className={s.menu_header}>
        <CustomSelect
        className={s.menu_custom_select}
            options={optionsLanguage}
            isOpen={languageOpen}
            setIsOpen={setLanguageOpen}
            onClick={handleOptionClickLanguage}
            selectedOption={optionsLanguageState}
          />
        </header>

        <nav className={s.menu_nav}>
          <ul>
            <li>
              <a href="#">Car List</a>
            </li>
            <li>
              <a href="#">Yacht list</a>
            </li>
            <li>
              <a href="#">Chauffeur</a>
            </li>
            <li>
              <a href="#">Conditions</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
        <footer className={s.menu_footer}>
          <p className={s.menu_footer_info}>
            24 4th St - Al Quoz - Al <br /> Quoz Industrial Area 3 - Dubai
          </p>
          <div className={s.menu_footer_number_social_network}>
          <p>+971 58 590 7875</p>
          <SocialNetwork/>
          {/* <SocialNetwork /> */}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NavBurgerMenu;
