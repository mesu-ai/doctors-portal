import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../bookingModal/BookingModal';

const BookingCard = ({booking}) => {

    const {name,time,space}=booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const bookingModalOpen = () => setOpenBooking(true);
    const bookingModalClose = () => setOpenBooking(false);
  



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

          <Button onClick={bookingModalOpen} variant="contained">Book Appointment</Button>

          <BookingModal bookingModalOpen={bookingModalOpen} bookingModalClose={bookingModalClose} openBooking={openBooking} booking={booking}></BookingModal>

        


        </Paper>
              
        </Grid>
    );
};

export default BookingCard;