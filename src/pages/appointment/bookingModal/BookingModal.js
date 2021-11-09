import { Backdrop, Button, Fade, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

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
    const {user}=useAuth();
    const {name,time}=booking;
  
  const initializeInfo={patientName:user.displayName,
                        email:user.email,phone:'',
                    }

  const [bookingInfo,setBookingInfo]=useState(initializeInfo);

  const handleOnBlur=(e)=>{
    const field=e.target.name;
    const value=e.target.value;

    const newInfo={...bookingInfo};
    newInfo[field]=value;
    setBookingInfo(newInfo);


  }

    const bookingHandle =(e)=>{

      const appointment={
        ...bookingInfo,
        time,
        serviceName:name,
        date:date.toLocaleDateString(),


      }
      // console.log(appointment);
      const url='http://localhost:5000/appointments';
      axios.post(url,appointment)
      .then(result=>{
        if(result.data.insertedId){
          alert('Booking Successfully !');
          bookingModalClose();
        }
      })



       

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

            <TextField sx={{mb:2}} fullWidth label="Patient Name" id="fullWidth" name="patientName" onBlur={handleOnBlur} defaultValue={user.displayName || ''} />
            <TextField sx={{mb:2}} fullWidth label="Email" id="fullWidth" name="email" onBlur={handleOnBlur} defaultValue={user.email || ''} />
            <TextField sx={{mb:2}} fullWidth label="Phone" id="fullWidth" name="phone" onBlur={handleOnBlur} />
            <TextField disabled sx={{mb:2}} fullWidth label="Time" id="fullWidth" defaultValue={time || ''} />
            <TextField disabled aria-readonly sx={{mb:3}} fullWidth label="date" id="fullWidth" defaultValue={date.toDateString()} />

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