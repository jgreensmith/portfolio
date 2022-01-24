import { Card, CardActionArea, CardMedia, Container, Slide, Stack, Typography, Link } from "@mui/material";
import Layout from "../components/Layout";
import Masonry from '@mui/lab/Masonry';
import { sanityClient, urlFor } from "../sanity";

const Portfolio = ({ portfolioData }) => {
    console.log(portfolioData);
    return(
        <Layout title="Portfolio">
                <h1>portfolio</h1>
            {/* <Container maxWidth="xl"> */}
                <Masonry columns={{ xs: 1, vs: 2, sm: 3, md: 4 }} spacing={2}>
                    {portfolioData.map((portfolio, index) => {
                        return (
                            <Stack key={index}>
                                <Slide direction="up" in={true}>
                                    <Card>
                                        <Link href={portfolio.href}>
                                            <CardActionArea>
                                                <CardMedia 
                                                    component="img"
                                                    src={urlFor(portfolio.portfolioImage).size(600, 600).quality(90).fit("min").url()}
                                                    alt="company"
                                                />
                                            </CardActionArea>
                                        </Link>
                                    </Card>
                                </Slide>
                            </Stack>
                        )                       
                    })}
                    
                </Masonry>
            {/* </Container> */}
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