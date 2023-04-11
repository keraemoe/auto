import React from "react";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.header_nav}>
        <ul className={s.left_ul}>
          <li>
            <a href="#">Car List</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <div className={s.logo_text}>
          <img src="./logo.png" alt="logo" />
          <img src="./logo_text.png" alt="logo_text" />
        </div>
        {/* logo_text */}

        <ul className={s.right_ul}>
          <li>
            <a href="#">+971 58 590 7875</a>
          </li>

          <select>
            <option>Dubai</option>
            <option>test1</option>
            <option>test2</option>
          </select>

          <select>
            <option>ENG</option>
            <option>RUS</option>
            <option>KGZ</option>
          </select>
        </ul>
      </nav>
      {/* nav */}
    </header>
    // header
  );
};

export default Header;
