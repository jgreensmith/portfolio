import Layout from "../components/Layout";
import Hero from "../components/Hero";



const Home = () => {
  return (
    <Layout title="Home">
      <Hero />
    </Layout>
  )
}

// export const getServerSideProps = async () => {
//   const query = '*[_type == "hero"]'
//   const heroData = await sanityClient.fetch(query)

//   if (!heroData.length) {
//       return {
//           props: {
//               heroData: [],
//           },
//       }
//   } else {
//       return {
//           props: {
//               heroData,
//           },
//       }
//   }
// }

 export default Home;