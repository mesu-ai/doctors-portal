import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const BookingCard = ({booking}) => {
    const {name,time,space}=booking;
    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
        <Paper sx={{padding:5}} elevation={3}>
          <Typography sx={{color:"info.main",fontWeight:'bold'}} variant="h5" gutterBottom>
              {name}
          </Typography>
          <Typography sx={{fontWeight:'bold'}} gutterBottom>
              {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
        {space}
      </Typography>

          <Button variant="contained">Book Appointment</Button>

        


        </Paper>
              
        </Grid>
    );
};

export default BookingCard;