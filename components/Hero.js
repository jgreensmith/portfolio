import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';


import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { HeroBox, HeroSlide } from '../utils/styles';

const params = {
    slidesPerView: 'auto',
    watchOverflow: false,
    autoplay: {
      delay: 5000
    },
    loop: true,
    allowTouchMove: false,
    speed: 1000,
    fadeEffect: {
      crossFade: true
    }
};
const images = [
    '/images/home-1.jpg',
    '/images/home-2.jpg',
    '/images/home-3.jpg',
    '/images/home-4.jpg',
];

export default () => {
    return (
        <HeroBox>

            <Swiper modules={[EffectFade, Autoplay]} {...params} effect='fade'>
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <HeroSlide
                        sx={{
                            backgroundImage: `url("${image}")`
                        }} 
                    >

                    </HeroSlide>
                </SwiperSlide>
            ))}
            </Swiper>
        </HeroBox>
    )
}