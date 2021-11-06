import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BookingCard from '../bookingCard/BookingCard';

const AppointmentBooking = ({date}) => {
    const appointBooking=[

        {name:"Teeth Orthodontics",time:"8:00 AM - 9:00 AM",space:"10 SPACES AVAILABLE"},
        {name:"Cosmetic Dentistry",time:"10:00 AM - 11:30 AM",space:"10 SPACES AVAILABLE"},
        {name:"Teeth Cleaning",time:"11:30 AM - 12:30 PM",space:"10 SPACES AVAILABLE"},
        {name:"Teeth Whiting",time:"5:00 PM - 6:00 PM",space:"10 SPACES AVAILABLE"},
        {name:"Cavity Protection",time:"7:00 PM - 8:30 PM",space:"10 SPACES AVAILABLE"},
        {name:"Root Transplant",time:"8:30 AM - 10:00 AM",space:"10 SPACES AVAILABLE"},
        
    ]



    return (
        <Box sx={{ flexGrow: 1,my:5 }}>
        <Container>
        <Grid container spacing={{ xs: 3, md: 2 }}>
          {
              appointBooking.map(booking=><BookingCard booking={booking} key={Math.random()} date={date}></BookingCard>)
          }
        </Grid>
        </Container>
      </Box>
    );
};

export default AppointmentBooking;