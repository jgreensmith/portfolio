import { Card, CardActionArea, CardMedia, Container, Slide, Stack, Typography, Link, ImageList, ImageListItem, ImageListItemBar, Paper } from "@mui/material";
import Layout from "../components/Layout";
import Masonry from '@mui/lab/Masonry';
import sanityClient from '../sanity';

import { Overlay, PortfolioImg } from "../utils/styles";

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
                    {images.map((image, index) => (
                        <Stack key={index}  >
                            <Slide direction="up" in={true}>
                                <Link href='#' target="_blank" rel="noreferrer" >
                                    <Paper 
                                        elevation={8}
                                        sx={{
                                            position: 'relative', 
                                            backgroundImage: `url("${image}")`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center center !important',
                                            maxWidth: '300px',
                                            maxHeight: '300px',
                                            margin: 2,
                                        }}

                                    >
                                        <PortfolioImg
                                            src={image}
                                            alt='image'
                                            loading="lazy"
                                        />
                                        
                                        <Overlay>
                                            <Typography 
                                                component="h5" 
                                                sx={{
                                                    p: 2,
                                                    color: '#fff',
                                                    backgroundColor: 'background.dark',
                                                    opacity: 0.8
                                                }}
                                            >
                                                Link to account
                                            </Typography>
                                        </Overlay>
                                    </Paper>
                                </Link>
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