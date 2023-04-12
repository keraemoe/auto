import React from 'react';
import s from './ShowCarsCard.module.scss'
import Image from 'next/image';
import { motion } from 'framer-motion'

const ShowCarsCard = ({ img, title }) => {
	return (
		<motion.div className={s.car_card}>
			<Image src={img} alt='car' />
			<div className={s.car_card_footer}>
				<h3>{title}</h3>
				<button>Rent</button>
			</div>
		</motion.div>
	);
};

export default ShowCarsCard;