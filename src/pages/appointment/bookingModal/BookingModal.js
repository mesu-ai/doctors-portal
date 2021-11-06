import { Backdrop, Button, Fade, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',  
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({bookingModalOpen,bookingModalClose,openBooking,booking,date}) => {

    const {name,time,space}=booking;

    const bookingHandle =(e)=>{

        bookingModalClose();

        e.preventDefault();
    }
    
     return (
        <div>
     
      <Modal 
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={bookingModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box  sx={style}>

          <Typography sx={{mb:3,textAlign:'center',color:'info.main'}} id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>

            <form onSubmit={bookingHandle}>

            <TextField sx={{mb:2}} fullWidth label="Name" id="fullWidth" value={name || ''} />
            <TextField sx={{mb:2}} fullWidth label="Email" id="fullWidth" />
            <TextField sx={{mb:2}} fullWidth label="Phone" id="fullWidth" />
            <TextField sx={{mb:2}} fullWidth label="Time" id="fullWidth" />
            <TextField sx={{mb:3}} fullWidth label="date" id="fullWidth" value={date.toDateString()} />

            <Button sx={{float:'right',px:3}} variant="contained" type="submit">SEND</Button>
            




            </form>


          
    
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
          </Box>
        </Fade>
      </Modal>
    </div>
    );
};

export default BookingModal;