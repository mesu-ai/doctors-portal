import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const InfoCard = () => {
    return (
        <Box sx={{ flexGrow: 1,mt:-15,mb:8 }}>
        <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} >
           
            <Grid item xs={12} sm={6} md={4} >
            
            <Paper elevation={3} sx={{backgroundColor:'info.main',display:'flex',justifyContent:'center',alignItems:'center',px:3,py:2}} >

            <p><i style={{color:'white'}} className="far fa-clock fa-4x"></i></p>
            <div style={{color:'white',textAlign:'start',marginLeft:'15px'}}>
            <Typography variant="h6" gutterBottom component="div">
                Opening Hours
            </Typography>
            <Typography sx={{textAlign:'justify'}} variant="subtitle1" gutterBottom component="div">
               9:00 AM - 5:00 PM
            </Typography>

            </div>
            
            
            </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{backgroundColor:'rgb(23, 23, 24)',display:'flex',justifyContent:'center',alignItems:'center',px:3,py:2}} >
           
            <p><i style={{color:'white'}} className="fas fa-map-marker-alt fa-4x"></i></p>
            <div style={{color:'white',textAlign:'start',marginLeft:'15px'}}>
            <Typography variant="h6" gutterBottom component="div">
                Visit our location
            </Typography>
            <Typography sx={{textAlign:'justify'}} variant="subtitle1" gutterBottom component="div">
                27/4 Gulsan, Dhaka.
            </Typography>

            </div>
            
            
            </Paper>        
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{backgroundColor:'info.main',display:'flex',justifyContent:'center',alignItems:'center',px:3,py:2}} >
            
            <p><i style={{color:'white'}} className="fas fa-phone-volume fa-4x"></i></p>
            <div style={{color:'white',textAlign:'start',marginLeft:'15px'}}>
            <Typography variant="h6" gutterBottom component="div">
                Contract us
            </Typography>
            <Typography sx={{textAlign:'justify'}} variant="subtitle1" gutterBottom component="div">
                +88 017000000000
            </Typography>

            </div>
            
            
            </Paper>
            </Grid>
            
        </Grid>
        
        </Container>
        </Box>
    );
};

export default InfoCard;