import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import NextLink from 'next/link';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { HeroBox, HeroSlide } from '../utils/styles';
import SvgButton from './svg/ButtonSvg';
import { Typography, Link, Slide } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

//import Footer from './Footer';

const images = [
    '/images/home-1.jpg',
    '/images/home-2.jpg',
    '/images/home-3.jpg',
    '/images/home-4.jpg',
];


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

const Hero = () => {
    //console.log(heroData);
    return (
        <HeroBox>

            <Swiper modules={[EffectFade, Autoplay]} {...params} effect='fade'>
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <HeroSlide
                        role="img"
                        //aria-label={hero.alt}
                        sx={{
                            backgroundImage: `url("${image}")`
                        }} 
                    >
                        
                            <NextLink href="/services">
                                <SvgButton sx={{mr: '9px', mb: 3}} >
                                    <Typography color='#fff' variant='h6' sx={{textTransform: 'capitalize'}} >
                                        About 
                                    </Typography>
                                </SvgButton>
                            </NextLink>
                            <NextLink href="/portfolio">
                                <SvgButton sx={{mr: '9px', mb: 3}} >
                                    <Typography color='#fff' variant='h6' sx={{textTransform: 'capitalize'}} >
                                        Portfolio
                                    </Typography>
                                </SvgButton>
                            </NextLink>
                            <Link href="https://www.instagram.com/digital.mcr/" target="_blank" rel="noreferrer" >
                                <SvgButton sx={{mr: '9px', mb: 3}}  >
                                    <Typography color='#fff' variant='h6' sx={{textTransform: 'capitalize'}} >
                                        Github
                                    </Typography>
                                </SvgButton>
                            </Link>
                            <Link href="mailto:digitalmcr@hotmail.com?subject=MCR Digital enquiry">
                                <SvgButton sx={{mr: '9px', mb: 3}}  >
                                    <Typography color='#fff' variant='h6' sx={{textTransform: 'capitalize'}} >
                                        Contact Me
                                    </Typography>
                                </SvgButton>
                            </Link>
                        
                        
                    </HeroSlide>
                </SwiperSlide>
            ))}
            </Swiper>
            {/* <Footer/> */}
        </HeroBox>
    )
}

export default Hero;