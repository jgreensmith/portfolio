
import NextLink from 'next/link';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { HeroBox, HeroSlide } from '../utils/styles';
import SvgButton from './svg/ButtonSvg';
import { Typography, Link, Slide } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

//import Footer from './Footer';


const Hero = () => {
    //console.log(heroData);
    return (
            <div className='hero'>
                    
                        
                            <NextLink href="/about">
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
                            <Link href="https://github.com/jgreensmith" target="_blank" rel="noreferrer" >
                                <SvgButton sx={{mr: '9px', mb: 3}}  >
                                    <Typography color='#fff' variant='h6' sx={{textTransform: 'capitalize'}} >
                                        Github
                                    </Typography>
                                </SvgButton>
                            </Link>
                            <Link href="mailto:jgreensmith13@gmail.com">
                                <SvgButton sx={{mr: '9px', mb: 3}}  >
                                    <Typography color='#fff' variant='h6' sx={{textTransform: 'capitalize'}} >
                                        Contact Me
                                    </Typography>
                                </SvgButton>
                            </Link>
                            <Link href="https://www.linkedin.com/in/james-greensmith-b808341a4/" target="_blank" rel="noreferrer" >
                                <SvgButton sx={{mr: '9px', mb: 3}}  >
                                    <Typography color='#fff' variant='h6' sx={{textTransform: 'capitalize'}} >
                                        LinkedIn
                                    </Typography>
                                </SvgButton>
                            </Link>
                        
                        
                    
                
                            </div>
    )
}

export default Hero;