import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from  '../../../images/appointment-bg.png';

const contractBg={
    background:`url(${bg})`,
    backgroundColor:'rgba(32, 6, 44, 0.856)',
    backgroundBlendMode:'darken'



}

const Contractus = () => {

    const handleContract =(e)=>{

        e.preventDefault();


    }



    return (
      <Box sx={contractBg}>
       <Box sx={{py:5,}}>
       <Typography sx={{color:'info.main',fontWeight:'bold',mt:5}} variant="h5" gutterBottom component="div">
        CONTRACT US
      </Typography>

       <Typography sx={{color:'white',mb:5}} variant="h4" gutterBottom component="div">
        Always Contract With Us
      </Typography>

        <Box sx={{width:"50%",mx:"auto",}}>
        
        <form onChange={handleContract}>
        <TextField required sx={{backgroundColor:'white'}} fullWidth label="Email Address" id="fullWidth" />
        <TextField required sx={{backgroundColor:'white',my:3}} fullWidth label="Subject" id="fullWidth" />
        <TextField multiline rows={4} sx={{backgroundColor:'white'}} required fullWidth label="Your Messege" id="fullWidth" />

        <Button type="submit" sx={{my:5,px:4}} variant="contained">SEND</Button>

        </form>
        </Box>

        

        

        </Box>
        
      </Box>
    );
};

export default Contractus;