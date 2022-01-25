import { Card, CardActionArea, CardMedia, Container, Slide, Stack, Typography, Link, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Layout from "../components/Layout";
import Masonry from '@mui/lab/Masonry';
import { sanityClient, urlFor } from "../sanity";
import { Overlay } from "../utils/styles";

const Portfolio = ({ portfolioData }) => {
    console.log(portfolioData);
    return(
        <Layout title="Portfolio">
            <Container maxWidth="xl">
                <ImageList variant="masonry" columns={{ xs: 1, vs: 2, sm: 3, md: 4 }} gap={8}>
                    {portfolioData.map((portfolio, index) => (
                        <Slide direction="up" in={true}>
                            <Link href={portfolio.href}>
                                <ImageListItem key={index}>  
                                    <img
                                        src={urlFor(portfolio.portfolioImage).quality(90).fit("min").url()}
                                        alt={portfolio.alt}
                                        loading="lazy"
                                    />
                                    
                                    <Overlay>
                                        <Typography component="h5">{portfolio.alt}</Typography>
                                    </Overlay>
                                    
                
                                </ImageListItem>
                            </Link>
                        </Slide>                        
                    ))}
                    
                </ImageList>
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