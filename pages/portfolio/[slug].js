import { Container, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { sanityClient, urlFor } from "../../sanity";
import { HeroBox, HeroSlide } from "../../utils/styles";
import {PortableText} from '@portabletext/react';


const Summary = ({title, mainImage, body}) => {
    console.log({title, mainImage, body});
    return (
        <Layout title={title}>
        <HeroBox
            >


                <HeroSlide
                    sx={{
                    backgroundImage: `url("${urlFor(mainImage).quality(90).fit("min").url()}")`
                    }}
                    >
                    <Container maxWidth='lg' 
                        sx={{ 
                        backgroundColor: 'secondary.light', 
                        p: 2
                    }}
                    >
                        <Typography variant="h1" color='primary.light'>{title}</Typography>
                        <Typography variant='body1' color='primary.light' sx={{mr: 2}}>
                        <PortableText
                            value={body}
                        />
                        </Typography>
                        
                    </Container>
                </HeroSlide>
            
            </HeroBox>
        </Layout>
    )
}

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug;

    const query = `*[ _type == "portfolio" && slug.current == $pageSlug ][0] {
        title,
        mainImage,
        body
    }`

    const summary = await sanityClient.fetch(query, { pageSlug });

    if (!summary) {
        return {
            props: null,
            notFound: true
        }
    } else {
        return {
            props: {
                title: summary.title,
                mainImage: summary.mainImage,
                body: summary.body
            }
        }
    }
}

export default Summary;