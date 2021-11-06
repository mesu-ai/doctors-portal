import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png';

const ExceptionalDental = () => {
    return (
        <Box sx={{ flexGrow: 1,my:5 }}>
        <Container>
        <Grid container spacing={5}>
            <Grid item xs={12} md={5}>
                <img src={treatment} alt="" width="100%" />

            
            </Grid>
            <Grid item xs={12} md={7} sx={{textAlign:'start',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'start'}}>
                <Typography sx={{fontWeight:'550'}} variant="h4">
                    Exceptional Dental <br />
                    Care On Your Teams

                </Typography>

                <Typography sx={{color:'text.secondary',my:3}} variant="p" display="block" gutterBottom>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum, consequuntur excepturi iste minima aut fuga voluptates dolorem quas impedit! Facere, porro! Corrupti ad doloribus fuga nobis deleniti fugit tempora totam, porro maxime! Tempore itaque, illo repellat obcaecati iste totam quaerat commodi voluptatum nemo dolorem reiciendis, inventore adipisci unde dolorum!
                </Typography>

                <Button sx={{color:'white',}} variant="contained">Learn More</Button>
           
            </Grid>

        </Grid>
        </Container>
        </Box>
    );
};

export default ExceptionalDental;