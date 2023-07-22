
import { CardActionArea, CardMedia, Container, Slide, Divider, List, Stack, ListItemButton, Typography, Link, ImageList, ImageListItem, ImageListItemBar, Paper, Toolbar, Grid, Tooltip, Button, IconButton } from "@mui/material";
import Layout from "../components/Layout";
import Masonry from '@mui/lab/Masonry';
import {sanityClient, urlFor} from '../sanity';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import Modal from "react-modal";
import { useRouter } from "next/router";
import { PortableText } from '@portabletext/react';
import {getImageDimensions} from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'




import { CardActionFooter, CardBanner, CardTitle, CenteredGrid, Overlay, PortfolioCard, PortfolioCardBody, PortfolioImg } from "../utils/styles";

import styles from '../styles/Portfolio.module.css';
import { useState } from "react";
import { useEffect } from "react";

Modal.setAppElement("#__next");
 
const Portfolio = ({portfolioData, categories}) => {
    //const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const [catOpen, setCatOpen] = useState(false);
    const [productList, setProductList] = useState(portfolioData);



    const updateContent = (portfolio) => {
        setModalContent([portfolio]);
        setModalOpen(true);
    };

    //if categories create allcategories array
    const allCategories = categories ? [{"title": 'All'}, ...categories] : null;

    const catFilter = (cat) => {
        if(cat.title === 'All') {
            setProductList(portfolioData);
            return;
        }
        //match product ref (if there is one) with cat id
        const filteredProducts = portfolioData.filter(product => product?.categories[0]?._ref === cat._id);
        setProductList(filteredProducts);
    };

    const handleCatToggle = () => {
        setCatOpen(!catOpen)
    };

    const drawCatFilter = (cat) => {
        setCatOpen(false);
        catFilter(cat);
    };


    useEffect(() => {
        document.body.style.overflow = modalOpen ? 'hidden': 'unset';
     }, [modalOpen]);

    const SampleImageComponent = ({value, isInline}) => {
        return (
        <div style={{
            padding: "30px"
        }}>

          <img
            src={urlFor(value).width(600).quality(90).fit("min").url()}
            alt={value.alt || ' '}
            loading="lazy"
            
            />
            </div>
        )
      }
      
      const components = {
        types: {
          image: SampleImageComponent,
          // Any other custom types you have in your content
          // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
        },
      }

    return(
        <Layout title="Portfolio">
            <Container maxWidth="xl">
                <Grid container spacing={1}>
                <Grid item xs={12} sm={3} sx={{display: {xs: 'none', sm: 'block'}}}>
            <Paper sx={{ width: 260, p: 1, m: 1, mt: 7, position: 'fixed'}}>
                <Toolbar>
                    <Typography variant='h6'>
                        Filter by Catergory
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {allCategories.map((cat, index) => (
                        <ListItemButton onClick={() => catFilter(cat)} key={index}>
                            {cat.title}
                        </ListItemButton>
                    ))}                
                </List>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={9} >

                            <CenteredGrid container spacing={5} sx={{pt: 6}} >
                    {productList.map((portfolio, index) => (
                        <CenteredGrid item key={index} xs={12} sm={6} md={4} >
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
                                        
                                        <Tooltip title="Project summary">  
                                            <IconButton onClick={() => updateContent(portfolio)} color="info" >
                                                <InfoIcon />                                            
                                            </IconButton>   
                                        </Tooltip>
                                        
                                        { portfolio.github && <Tooltip title="See GitHub repository">
                                            <Link href={portfolio.github} target="_blank" rel="noreferrer" color="primary.light" >
                                                <GitHubIcon />
                                            </Link>
                                        </Tooltip>}
                                        {portfolio.href && <Tooltip title="Visit website">
                                            <Link href={portfolio.href} target="_blank" rel="noreferrer"  color="primary.light" >
                                                <OpenInBrowserIcon />
                                            </Link>
                                        </Tooltip>}
                                    </CardBanner>
                                </PortfolioCard>
                            </Slide>   
                                          
                        </CenteredGrid>    
                    ))}
                    
                </CenteredGrid>
                </Grid>
                </Grid>

            </Container>
            <Modal 
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                {modalContent.map((content) => {
                    return (
                        <Container maxWidth='lg' 
                            sx={{ 
                                backgroundColor: 'secondary.light', 
                                p: 2,
                            }}
                        >
                        <Typography variant="h1" color='primary.light'>{content.title}</Typography>
                        <Typography variant='body1' color='primary.light' sx={{mr: 2}}>
                            <PortableText
                            value={content.body}
                            components={components}
                            />
                        </Typography>
                        
                      </Container>
                        
                    )
                })}                          
            </Modal>
        </Layout>
    )
    
}

export const getServerSideProps = async () => {
    const query = '*[_type == "portfolio"]'
    const catQuery = '*[_type == "category"]'
    const portfolioData = await sanityClient.fetch(query)
    const categories = await sanityClient.fetch(catQuery)

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
                categories
            },
        }
    }
}

export default Portfolio;