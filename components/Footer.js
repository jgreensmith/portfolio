import { Button, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";


export default function Footer(props) {
  return (

    <Container maxWidth="100%" component="footer" 
        sx={{ backgroundColor: 'background.dark' }}
    >
        <Box p={4} sx={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Typography variant="body2" color="background.default" align="center" sx={{pt: '4px'}}>
                {'© '}
                MCR-Digitass 2022
                {'.'}
            </Typography>
            <Button variant="text" href="mailto:digitalmcr@hotmail.com?subject=MCR Digital enquiry">
                Email
            </Button>
        </Box>
    </Container>
  )
}