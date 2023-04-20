import React from "react";
import s from "./AskUsAnything.module.scss";
import MyInput from "../Input/MyInput";
const AskUsAnything = () => {
  
    return (

    <section className={s.AskUsAnything}>
      <iframe className={s.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0JTRg9Cx0LDQuSAtINCe0LHRitC10LTQuNC90LXQvdC90YvQtSDQkNGA0LDQsdGB0LrQuNC1INCt0LzQuNGA0LDRgtGL!5e0!3m2!1sru!2skg!4v1681918989399!5m2!1sru!2skg"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={s.right_block}>
        <h1>Ask us anything</h1>
        <MyInput placeholder = "Name" type="text" />
        <MyInput placeholder = "Email" type="Email" />
        <MyInput placeholder = "+7 (999) 999 - 99 - 99" type="text" />
        <input className={s.big_input} placeholder = "Message" type="text" />
        <button>SEND THE REQUEST</button>
      </div>
    </section>
  );
};

export default AskUsAnything;
