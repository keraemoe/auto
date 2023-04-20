import React, { useEffect } from 'react';
import s from './Discount.module.scss'
import Image from 'next/image';
import left from '../../public/zyro-image.png'

const Discount = () => {
	useEffect(() => {
		const marqueeTrack = document.getElementById("marqueeTrack");
		const spans = marqueeTrack.querySelectorAll("span");

		spans.forEach((span) => {
			span.addEventListener("mouseover", () => {
				marqueeTrack.style.animationPlayState = "paused";
			});

			span.addEventListener("mouseout", () => {
				marqueeTrack.style.animationPlayState = "running";
			});
		});
	}, []);
	
	return (
		<section className={s.discount_section}>
			<div className={s.discount_section__background_top}></div>
			<div className={s.discount_section__background_bottom}></div>
			<div className={s.discount_section__background_right}></div>
			<div className={s.discount_section__block}>
				<Image className={s.discount_section__block_left__img} src={left} alt='left_img' />
				<Image className={s.discount_section__block_right__img} src={left} alt='right_img' />
				<h1>Get a discount of up to 60%</h1>
				<h2>Get the latest articles and business updates that you need to <br />  know, you’ll even get special recommendations weekly.</h2>
				<div className={s.discount_section__block__footer}>
					<input placeholder='Your email' type="email" />
					<button>Receive</button>
				</div>
			</div>
				<div className={s.discount_section__block_background}>
					<span>+</span>
					<span>+</span>
					<span>+</span>
					<span>+</span>
					<span>+</span>
					<span>+</span>
					<span>+</span>
					<span>+</span>
					<span>+</span>
					<span style={{ color: 'red', visibility: 'hidden' }}>+</span>
					<span>+</span>
					<span>+</span>
					<span style={{ color: '#33B7BC' }}>+</span>
					<span style={{ color: 'red', visibility: 'hidden' }}>+</span>
					<span style={{ color: 'red', visibility: 'hidden' }}>+</span>
					<span style={{ color: '#33B7BC' }}>+</span>
					<span>+</span>
					<span>+</span>
				</div>
			<div className={s.discount_section_brands}>
				<div className={s.marquee}>
					<div className={s.track} id='marqueeTrack'>
						<div className={s.content}>
							&nbsp;
							<span>Lexus</span>
							<span>Mercedes</span>
							<span>Audi</span>
							<span>BMW</span>
							<span>Rolls-Royce</span>
							<span>Cadillac</span>
							<span>Maserati</span>
							<span>Lamborghini</span>
							<span>Bentley</span>
							<span>Porsche</span>
							<span>Lexus</span>
							<span>Mercedes</span>
							<span>Audi</span>
							<span>BMW</span>
							<span>Rolls-Royce</span>
							<span>Cadillac</span>
							<span>Maserati</span>
							<span>Lamborghini</span>
							<span>Bentley</span>
							<span>Porsche</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Discount;