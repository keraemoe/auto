import React from 'react';
import s from './Advantages.module.scss'
import Image from 'next/image';

const cars = [
    {
        id: 1,
        img: '/adv.png'
    },
    {
        id: 2,
        img: '/adv.png'
    },
    {
        id: 3,
        img: '/adv.png'
    },
    {
        id: 4,
        img: '/adv.png'
    },
    {
        id: 5,
        img: '/adv.png'
    },
    {
        id: 6,
        img: '/adv.png'
    },

]

const Advantages = () => {
    return (
        <>
            <div className={s.advantages}>
                <h1>Advantages</h1>
                <div className={s.content}>
                    {cars.map((item) => (
                        <div className={s.up}>
                            <Image
                                className={s.img}
                                width={639}
                                height={459}
                                src={item.img}
                                alt='img'
                            />
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
};

export default Advantages;