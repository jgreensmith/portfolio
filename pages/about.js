import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Link, Paper, Slide, Toolbar, Typography } from "@mui/material";
import Layout from "../components/Layout";
import { ProfileImg } from "../utils/styles";

const About = () => {
    return(
    <Layout title="About" >

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
                        React JS Developer
                        </Typography>
                        {/* <UnstyledButtonCustom /> */}
                        <Typography variant='body1' >
                        I am a self-taught Javascript/ React web developer. I have hosted two React websites for clients and a number of my own personal projects to develop my skills. I am proficient in: React, Node.Js, GitHub and using dev-tools to test Javascript and be creative with CSS/SASS. Furthermore, I am constantly looking to better my skills to utilise the DevOps process to ensure the quality of my projects, and to expand my knowledge of web development.
I have been studying web development and working on projects alongside my jobs. I have used my free time to better my skills and work towards my career goal of creating high quality reusable code and becoming a professional Web Developer. 
                        </Typography>


                    </Paper>
                </Grid>
                
            </Grid>
        </Container>
    </Layout>
    )
}

export default About;