import { IconButton, Button, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer(props) {
  return (

    <Container maxWidth="100%" component="footer" 
        sx={{ backgroundColor: 'background.dark' }}
    >
        <Box p={4} sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="body2" color="background.default" align="center" sx={{pt: '4px'}}>
                {'© '}
                MCR-Digitass 2022
                {'.'}
            </Typography>
            <Box>
                <Button variant="text" href="mailto:digitalmcr@hotmail.com?subject=MCR Digital enquiry">
                    Email
                </Button>
                <IconButton href="https://www.instagram.com/digital.mcr/" target="_blank" rel="noreferrer" >
                    <InstagramIcon color='primary' />
                </IconButton>   
                <IconButton href="https://www.linkedin.com/in/d%E2%80%99arcy-o%E2%80%99connor-b730a9152/" target="_blank" rel="noreferrer" >
                    <LinkedInIcon color='primary' />
                </IconButton> 
            </Box>

        </Box>
    </Container>
  )
}