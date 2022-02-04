import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { HeroBox, HeroSlide } from '../utils/styles';
import { urlFor } from '../sanity';
import SvgButton from './svg/ButtonSvg';
import { Typography } from '@mui/material';
//import Footer from './Footer';


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

const Hero = ({ heroData }) => {
    console.log(heroData);
    return (
        <HeroBox>

            <Swiper modules={[EffectFade, Autoplay]} {...params} effect='fade'>
            {heroData.map((hero, index) => (
                <SwiperSlide key={index}>
                    <HeroSlide
                        role="img"
                        aria-label={hero.alt}
                        sx={{
                            backgroundImage: `url("${urlFor(hero.heroImage).quality(90).fit("min").url()}")`
                        }} 
                    >
                        <SvgButton sx={{mr: '9px', mb: 3}} >
                            <Typography color='#fff' variant='h6' sx={{textTransform: 'capitalize'}} >
                                Contact Us
                            </Typography>
                        </SvgButton>
                        <SvgButton sx={{mr: '9px', mb: 3}} >
                            <Typography color='#fff' variant='h6' sx={{textTransform: 'capitalize'}} >
                                Contact Us
                            </Typography>
                        </SvgButton>
                        <SvgButton sx={{mr: '9px', mb: 3}} >
                            <Typography color='#fff' variant='h6' sx={{textTransform: 'capitalize'}} >
                                Contact Us
                            </Typography>
                        </SvgButton>
                        <SvgButton sx={{mr: '9px', mb: 3}} >
                            <Typography color='#fff' variant='h6' sx={{textTransform: 'capitalize'}} >
                                Contact Us
                            </Typography>
                        </SvgButton>
                        
                    </HeroSlide>
                </SwiperSlide>
            ))}
            </Swiper>
            {/* <Footer/> */}
        </HeroBox>
    )
}

export default Hero;