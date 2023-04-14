import React from 'react';
import s from './AboutUs.module.scss'
import Image from 'next/image';
import backImg from '../../public/backgroundAboutUS.png'

const AboutUs = () => {
	return (
		<section className={s.aboutus_section}>
			<Image src={backImg} alt='backImg'/>
		</section>
	);
};

export default AboutUs;