import { CardActionArea, CardMedia, Container, Slide, Stack, Typography, Link, ImageList, ImageListItem, ImageListItemBar, Paper, Grid } from "@mui/material";
import Layout from "../components/Layout";
import Masonry from '@mui/lab/Masonry';
import {sanityClient, urlFor} from '../sanity';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';

import { CardActionFooter, CardBanner, CardTitle, Overlay, PortfolioCard, PortfolioCardBody, PortfolioImg } from "../utils/styles";

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
                <Grid container spacing={20} >
                    {portfolioData.map((portfolio, index) => (
                        <Grid item key={index} xs={1} sm={2} md={3} sx={{m: '20px'}}>
                            <Slide direction="up" in={true}>
                               
                                <PortfolioCard className={styles.card}>
                                    <CardBanner className={styles.cardBanner} sx={{top: '-30px', transform: 'translateY(-20px)'}} >
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
                                    <PortfolioCardBody>
                                        <PortfolioImg
                                            src={urlFor(portfolio.mainImage).size(600, 600).quality(90).fit("min").url()}
                                            alt={portfolio.title}
                                            loading="lazy"
                                            />
                                    </PortfolioCardBody>
                                    
                                    <CardBanner
                                        className={styles.cardBanner}
                                        sx={{
                                            justifyContent: 'space-evenly',
                                            bottom: '-20px',
                                            transform: 'translateY(20px)',
                                                
                                        }}
                                    >
                                        <InfoIcon />
                                        <Link href={portfolio.github} target="_blank" rel="noreferrer" >
                                            <GitHubIcon color="#fff" />
                                        </Link>
                                        <Link href={portfolio.href} target="_blank" rel="noreferrer" >
                                            <OpenInBrowserIcon />
                                        </Link>
                                    </CardBanner>
                                </PortfolioCard>
                            </Slide>   
                            
                        </Grid>                    
                    ))}
                    
                </Grid>
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