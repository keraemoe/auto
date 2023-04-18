import React, { useEffect, useRef, useState } from 'react';
import s from './AboutUs.module.scss'
import Image from 'next/image';
import backImg from '../../public/backgroundAboutUS.png'
import leftQuotes from '../../public/leftquotes.png'
import rightQuotes from '../../public/rightquotes.png'
import manCars from '../../public/manWithCards.png'

const AboutUs = () => {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const { innerHeight, pageYOffset } = window;

			if (ref.current && ref.current.offsetTop <= innerHeight + pageYOffset - 50) {
				setInView(true);
			} else {
				setInView(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [ref]);
	return (
		<div style={{ width: '100%', background: '#161516' }}>
			<section className={s.aboutus_section} ref={ref}>
				<Image className={s.aboutus_section_background} src={backImg} alt='backImg' />
				<div className={s.background_gradient_left}></div>
				<div className={s.background_gradient_right}></div>
				{inView &&
					(
						<div className={s.aboutus_section_block}>
							<div className={s.aboutus_section_block_header}>
								<h1>About Us</h1>
							</div>
							<div className={s.aboutus_section_block_main}>
								<div className={s.aboutus_section_block_main_bloks}>
									<div className={s.aboutus_section_block_main_blok}>
										<div style={{ display: 'flex' }}>
											<div className={s.background_text}>
												<p className={`${s.num} ${s.num1}`}></p>
											</div>
											<div style={{ display: 'flex', alignItems: 'flex-end', height: '90px' }}>
												<h4>year</h4>
											</div>
										</div>
										<h3>We've come a long way from a 2-people <br /> company to winning at Webby's. </h3>
									</div>
									<div className={s.aboutus_section_block_main_blok}>
										<div style={{ display: 'flex' }}>
											<div className={s.background_text}>
												<p className={`${s.num} ${s.num2}`}></p>
											</div>
											<div style={{ display: 'flex', alignItems: 'flex-end', height: '90px' }}>
												<h4>cars</h4>
											</div>
										</div>
										<h3>We've come a long way from a 2-people <br /> company to winning at Webby's.  </h3>
									</div>
									<div className={s.aboutus_section_block_main_blok}>
										<div style={{ display: 'flex' }}>
											<div className={s.background_text}>
												<p className={`${s.num} ${s.num3}`}></p>
											</div>

											<div style={{ display: 'flex', alignItems: 'flex-end', height: '90px' }}>
												<h4>people</h4>
											</div>
										</div>
										<h3>We've come a long way from a 2-people <br /> company to winning at Webby's.  </h3>
									</div>
								</div>
							</div>
							<div className={s.aboutus_section_block_footer}>
								<Image className={s.left_quotes} src={leftQuotes} />
								<div>
									<p>I’m with cars for over 18 years. My auto passion <br /> and attention to details will make your <br /> experience with us second to none. Guaranteed.</p>
									<div className={s.quote}>
										<h4>Kirill Aliev, MBA </h4>
										<span> CEO Trinity car rental boutique</span>
									</div>
								</div>
								<Image className={s.right_quotes} src={rightQuotes} />
							</div>
						</div>
					)
				}
				<div className={s.aboutus_section_person}>
					<Image src={manCars} alt='manCars' />
				</div>
			</section>
		</div>

	);
};

export default AboutUs;