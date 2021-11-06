import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TestimonialCard = ({testimonial}) => {
    const {name, img, quota, place}=testimonial;
    return (
        <Grid item xs={12} sm={4} md={4}>
        
        <Paper sx={{padding:3}} elevation={3}>
        <Typography variant="body1" gutterBottom sx={{color:"secondary.text",textAlign:'justify'}}>
            {quota}
        
        </Typography> 

        <Box sx={{display:'flex',justifyContent:'start',alignItems:'center', mt:5}}>
        
        <img src={img} alt="" />

        <div style={{textAlign:'start',marginLeft:'15px'}}>

        <Typography sx={{color:'info.main'}} variant="h6" gutterBottom component="div">
        {name}
      </Typography>

      <Typography sx={{fontSize:'18px',fontWeight:500}} variant="p" gutterBottom component="div">
          {place}    
      </Typography>

      </div>
      </Box>

        </Paper >
           
        </Grid>
        
    );
};

export default TestimonialCard;