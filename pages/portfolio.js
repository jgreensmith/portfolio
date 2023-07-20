
import { CardActionArea, CardMedia, Container, Slide, Stack, Typography, Link, ImageList, ImageListItem, ImageListItemBar, Paper, Grid, Tooltip, Button, IconButton } from "@mui/material";
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
 
const Portfolio = ({portfolioData}) => {
    //const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const updateContent = (portfolio) => {
        setModalContent([portfolio]);
        setModalOpen(true);
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
            src={urlFor(value).size(600, 800).quality(90).fit("max").url()}
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
            <Container maxWidth="lg">
                <CenteredGrid container spacing={5} sx={{pt: 6}} >
                    {portfolioData.map((portfolio, index) => (
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
                                        
                                        <Tooltip title="See GitHub repository">
                                            <Link href={portfolio.github} target="_blank" rel="noreferrer" color="primary.light" >
                                                <GitHubIcon />
                                            </Link>
                                        </Tooltip>
                                        <Tooltip title="Visit website">
                                            <Link href={portfolio.href} target="_blank" rel="noreferrer"  color="primary.light" >
                                                <OpenInBrowserIcon />
                                            </Link>
                                        </Tooltip>
                                    </CardBanner>
                                </PortfolioCard>
                            </Slide>   
                                          
                        </CenteredGrid>    
                    ))}
                    
                </CenteredGrid>
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