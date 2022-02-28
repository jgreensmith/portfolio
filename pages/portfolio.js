import { Card, CardActionArea, CardMedia, Container, Slide, Stack, Typography, Link, ImageList, ImageListItem, ImageListItemBar, Paper } from "@mui/material";
import Layout from "../components/Layout";
import Masonry from '@mui/lab/Masonry';
import {sanityClient, urlFor} from '../sanity';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';

import { CardActionFooter, CardBanner, CardTitle, Overlay, PortfolioCard, PortfolioImg } from "../utils/styles";

import styles from '../styles/Portfolio.module.css';

const images = [
    '/images/home-1.jpg',
    '/images/home-2.jpg',
    '/images/home-3.jpg',
    '/images/home-4.jpg',
  ];

const Portfolio = ({portfolioData}) => {
    console.log(portfolioData);
    return(
        <Layout title="Portfolio">
            <Container maxWidth="lg"  >
                <Masonry columns={{ xs: 2, sm: 3, md: 4}} spacing={0} sx={{display: 'flex', alignContent: 'center'}} >
                    {portfolioData.map((portfolio, index) => (
                        <Stack key={index}  >
                            <Slide direction="up" in={true}>
                                {/* <Link href={portfolio.href} target="_blank" rel="noreferrer" > */}
                                   <PortfolioCard className={styles.card}>
                                       <CardBanner className={styles.cardBanner} sx={{top: '-30px'}} >
                                            <Typography 
                                                component="h5" 
                                                sx={{
                                                   
                                                    color: '#fff',
                                                    
                                                    opacity: 0.8
                                                }}
                                            >
                                                {portfolio.title}
                                            </Typography>
                                       </CardBanner>
                                        <PortfolioImg
                                            src={urlFor(portfolio.mainImage).size(600, 600).quality(90).fit("min").url()}
                                            alt={portfolio.title}
                                            loading="lazy"
                                        />
                                        
                                        <CardBanner
                                            className={styles.cardBanner}
                                            sx={{
                                                justifyContent: 'space-evenly',
                                                color: '#fff',
                                                bottom: '-20px',
                                                transform: 'translateY(20px)'   
                                            }}
                                        >
                                            <InfoIcon />
                                            <GitHubIcon />
                                            <OpenInBrowserIcon />
                                        </CardBanner>
                                    </PortfolioCard>
                                {/* </Link> */}
                            </Slide>   
                        </Stack>                     
                    ))}
                    
                </Masonry>
            </Container>
        </Layout>
    )
    
}

export const getServerSideProps = async () => {
    const query = '*[_type == "portfolio"]'
    const portfolioData = await sanityClient.fetch(query)

    if (!portfolioData.length) {
        return {
            props: {
                portfolioData: [],
            },
        }
    } else {
        return {
            props: {
                portfolioData,
            },
        }
    }
}

export default Portfolio;