import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Link, Paper, Slide, Toolbar, Typography } from "@mui/material";
import Layout from "../components/Layout";
import { ProfileImg } from "../utils/styles";

const About = () => {
    return(
    <Layout title="About me" >

        <Container maxWidth='lg'
        sx={{
            my: 4
        }}
        >

            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Paper 
                        elevation={3} 
                        sx={{ 
                        width: { sm: '300px', xs: '200px'},
                        height: { sm: '300px', xs: '200px'},
                        borderRadius: '50%',
                        mx: 'auto',
                        mt: 8 
                        }}
                        >
                        <ProfileImg src='/images/profileImage.jpeg' 
                        sx={{ 
                            width: { sm: '300px', xs: '200px'},
                            height: { sm: '300px', xs: '200px'},
                        }} 
                        />
                    </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Paper 
                        elevation={0}  
                        sx={{ p: 4, mr: 2, mt: 2 }}
                    >
                        <Typography variant='h1'>
                         Professional Summary 
                        </Typography>
                        {/* <UnstyledButtonCustom /> */}
                        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="462fcd3e-dcbf-4c41-8196-743ff27b37b7" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                        <Typography variant='body1' >
                        Dedicated and enthusiastic self-taught programmer passionate about joining the effort to maintain the confidentiality, integrity and availability of peoples data. Knowledgeable about the TCP/IP and OSI model, ports and protocols, NIST frameworks and have an aspiration to implement security controls to ensure compliance with International regulations related to data protection. A strong background in software development, with experience implementing security controls at the application layer. Proficient in the use of the command-line interface, SQL, Python, Javascript, HTML. Strong communication and problem-solving skills.
                        </Typography>


                    </Paper>
                </Grid>
                
            </Grid>
        </Container>
    </Layout>
    )
}

export default About;