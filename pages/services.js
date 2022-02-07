import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Link, Paper, Slide, Toolbar, Typography } from "@mui/material";
import Layout from "../components/Layout";
//import UnstyledButtonCustom from "../components/svg/ButtonSvg";
import { ProfileImg } from "../utils/styles";


export default function Services(props) {
  return (
    <Layout title="Services" >

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
              <ProfileImg src='/images/home-1.jpg' 
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
                Darcy 
              </Typography>
              {/* <UnstyledButtonCustom /> */}
              <Typography variant='body1' >
                There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which do not look even slightly believable. 
                If you are going to use a passage of Lorem Ipsum, 
                you need to be sure there is not anything embarrassing hidden in the middle of text. 
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                making this the first true generator on the Internet. 
                It uses a dictionary of over 200 Latin words, 
                combined with a handful of model sentence structures, 
                to generate Lorem Ipsum which looks reasonable. 
                The generated Lorem Ipsum is therefore always free from repetition, injected humour, 
                or non-characteristic words etc.
              </Typography>


            </Paper>
          </Grid>
          
        </Grid>
      </Container>
      <Container maxWidth='lg' 
        sx={{
          my: 3,
          p: 4,
          backgroundColor: '#fff'
        }}
      >
        <Grid container spacing={2} >
            <Grid item xs={12} vs={6} sm={4} >
              <Slide direction="up" in={true}>
                <Card sx={{maxWidth: 300, backgroundColor: 'primary.main'}}>
                  <Link href="#">
                    <CardActionArea>
                      <CardMedia

                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='primary.light' >
                          Schmocial schmedia
                        </Typography>
                        <Typography variant="body2" color="primary.light">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>   

              </Slide>
            </Grid>
        </Grid>
      </Container>
      

    </Layout>
  )
}