import Layout from "../../components/Layout";
import { sanityClient } from "../../sanity";

const Summary = ({title, mainImage, body}) => {
    console.log({title, mainImage, body});
    return (
        <Layout title={title}>
<h1>summary</h1>
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