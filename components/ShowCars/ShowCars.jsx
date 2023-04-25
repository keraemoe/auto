import React, { useEffect, useState } from 'react';
import s from './ShowCars.module.scss'
import classNames from 'classnames';
import Urus from '../../public/LamborginiUrus.png'
import porshe from '../../public/Porshe.png'
import ferrari from '../../public/Ferrari.png'
import rols from '../../public/RolsRoyls.png'
import Image from 'next/image';
import ShowCarsCard from '../ShowCarsCard/ShowCarsCard';
import { motion } from 'framer-motion'

const ShowCars = () => {
	const [selectedFilter, setSelectedFilter] = useState('');
	const [cars, setCars] = useState([
		{
			img: Urus,
			title: 'Lamborghini Urus',
			date: 2018,
			rented: 200,
			daily: 1234,
			id: 1,
		},
		{
			img: ferrari,
			title: 'Ferrari Roma',
			date: 2021,
			rented: 500,
			daily: 144,
			id: 2,
		},
		{
			img: rols,
			title: 'Rolls-Royce Ghost',
			date: 2010,
			rented: 400,
			daily: 1104,
			id: 3,
		},
		{
			img: porshe,
			title: 'Porsche 911 Turbo S',
			date: 2013,
			rented: 700,
			daily: 541,
			id: 4,
		},
	]);


	function filterCarsByDate() {
		const sortedCars = cars.sort((a, b) => b.date - a.date);
		setCars([...sortedCars]);
	}

	function sortByRented() {
		const sortedCars = cars.sort((a, b) => b.rented - a.rented);
		setCars([...sortedCars]);
	}

	function sortByOffer() {
		const sortedCars = cars.sort((a, b) => a.id - b.id);
		setCars([...sortedCars])
	}

	function sortByDaily() {
		const sortedCars = cars.sort((a, b) => a.daily - b.daily)
		setCars([...sortedCars])
	}

	const handleFilterClick = (filter) => {
		setSelectedFilter(filter);
	};

	return (
		<section className={s.showcars_section}>
			<div className={s.cars_filter}>
				<motion.p
					initial="hidden"
					transition={{ duration: 0.1 }}
					whileInView="visible"
					variants={
						{
							hidden: { scale: 0 },
							visible: { scale: 1 }

						}
					}
					className={classNames(s.cars_filter_title, {
						[s.cars_filter_title_active]: selectedFilter === 'special',
					})}
					onClick={() => handleFilterClick('special') || sortByOffer()}>
					Special Offer</motion.p>
				<motion.p
					initial="hidden"
					transition={{ duration: 0.2 }}
					whileInView="visible"
					variants={
						{
							hidden: { scale: 0 },
							visible: { scale: 1 }

						}
					}
					className={classNames(s.cars_filter_title, {
						[s.cars_filter_title_active]: selectedFilter === 'new',
					})}
					onClick={() => handleFilterClick('new') || filterCarsByDate()}>New car</motion.p>
				<motion.p
					initial="hidden"
					transition={{ duration: 0.3 }}
					whileInView="visible"
					variants={
						{
							hidden: { scale: 0 },
							visible: { scale: 1 }

						}
					}
					className={classNames(s.cars_filter_title, {
						[s.cars_filter_title_active]: selectedFilter === 'popular',
					})}
					onClick={() => handleFilterClick('popular') || sortByRented()}>
					Most popular</motion.p>
				<motion.p
					initial="hidden"
					transition={{ duration: 0.4 }}
					whileInView="visible"
					variants={
						{
							hidden: { scale: 0 },
							visible: { scale: 1 }

						}
					}
					className={classNames(s.cars_filter_title, {
						[s.cars_filter_title_active]: selectedFilter === 'daily',
					})}
					onClick={() => handleFilterClick('daily') || sortByDaily()}>
					Daily</motion.p>
			</div>
			<div className={s.cars_catalog}>
				{cars.map((car => {
					return <ShowCarsCard key={car.id} img={car.img} title={car.title} />
				}))}
			</div>
			<motion.div
				initial="hidden"
				transition={{ duration: 0.7 }}
				whileInView="visible"
				variants={
					{
						hidden: { scale: 0 },
						visible: { scale: 1 }

					}
				}
				className={s.cars_catalog_btn}>
				<button>
					View all
				</button>
			</motion.div>
		</section>
	);
};

export default ShowCars;