import { Container } from "@mui/material";
import Layout from "../../components/Layout";
import { sanityClient, urlFor } from "../../sanity";



const Service = ({ body, title, mainImage }) => {
  console.log({ body, title, mainImage });
  return (
    <Layout title="Service" >

      <Container maxWidth='lg'
        sx={{
          my: 4
        }}
      >

        Butt
      </Container>
      

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