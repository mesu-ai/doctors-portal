import { Button, Container, Grid, Typography } from '@mui/material';
import { Box} from '@mui/system';
import React from 'react';
import appointmentbg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const bg={
    background:`url(${appointmentbg})`,
    marginTop:'150px',
    backgroundColor: 'rgba(31, 40, 71, 0.733)',
    backgroundBlendMode:'darken, luminosity',
    
}


const AppointmentBanner = () => {
    
    return (
        <Box style={bg} sx={{ flexGrow: 1,mb:5}}>
        <Container>
        <Grid  container spacing={2}>
          <Grid item xs={12} md={6} sx={{display: 'flex',
          alignItems: 'start',
          flexDirection: 'column',
          justifyContent:'center'}}>
            <img  src={doctor} alt="" style={{wtdth:'100%',height:'450px',marginTop:'-120px'}} />
          </Grid>
          <Grid item xs={12} md={6} sx={{display: 'flex',
          alignItems: 'start',
          flexDirection: 'column',
          justifyContent:'center'}}>
              <Typography sx={{color:'#3db7c4',fontWeight:'bold',fontSize:'20px'}} component="div">
                  APPOINTMENT
              </Typography>
              <Typography sx={{color:'white',fontWeight:'500',fontSize:'40px',my:3}} component="div">
                  Make an appointment Today
              </Typography>
              <Typography sx={{color:'white',fontSize:'18px',textAlign:'start',mb:3}} component="div">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium laborum sequi repellat sed, perferendis placeat ex sit eaque facilis.
              </Typography>

              <Button  variant="contained">Contained</Button>
            
          </Grid>
          </Grid>
          </Container>
          
          </Box>
    );
};

export default AppointmentBanner;