import { Container, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { sanityClient, urlFor } from "../../sanity";
import { HeroBox, HeroSlide } from "../../utils/styles";
import {PortableText} from '@portabletext/react';




const Service = ({ body, title, mainImage }) => {
  console.log({ body, title, mainImage });
  return (
    <Layout title={title} >
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

    const query = `*[ _type == "service" && slug.current == $pageSlug ][0] {
        title,
        mainImage,
        body
    }`

    const service = await sanityClient.fetch(query, { pageSlug });

    if (!service) {
        return {
            props: null,
            notFound: true
        }
    } else {
        return {
            props: {
                title: service.title,
                mainImage: service.mainImage,
                body: service.body,
            }
        }
    }
}

export default Service;