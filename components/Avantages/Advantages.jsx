import React from 'react';
import s from './Advantages.module.scss'
import Image from 'next/image';

const cars = [
    {
        id: 1,
        img: '/adv.png',
        tag: '40+ unique cars for rent from our fleet'
    },
    {
        id: 2,
        img: '/adv.png',
        tag: '40+ unique cars for rent from our fleet'
    },
    {
        id: 3,
        img: '/adv.png',
        tag: '40+ unique cars for rent from our fleet'
    },
]

const cars2 = [
    {
        id: 1,
        img: '/adv.png',
        tag: '40+ unique cars for rent from our fleet'
    },
    {
        id: 2,
        img: '/adv.png',
        tag: '40+ unique cars for rent from our fleet'
    },
    {
        id: 3,
        img: '/adv.png',
        tag: '40+ unique cars for rent from our fleet'
    },
]

const Advantages = () => {
    return (
        <>
            <div className={s.advantages}>
                <h1>Advantages</h1>
                <div className={s.content}>
                    <div className={s.up}>
                        <div className={s.container}>
                            {cars.map((car) => (
                                <>
                                    <Image width={639} height={459} src={car.img} alt="" />
                                    <h1>{car.tag}</h1>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className={s.down}>
                        <div className={s.container}>
                            {cars2.map((car2) => (
                                <>
                                    <Image width={639} height={459} src={car2.img} alt="" />
                                    <h1>{car2.tag}</h1>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Advantages;