import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import chair from '../../../images/chair.png';
import Calendar from '../../../components/shared/calendar/Calendar';

const appointBg={
    background:`url(${chair})`,
    backgroundBlendMode:'screen',
    backgroundColor:'rgba(226, 227, 240, 0.911)',
    padding:'50px 0px'

    
    
}

const AppointmentHeader = ({date, setDate}) => {

    return (
        <Box style={appointBg} sx={{ flexGrow: 1 }}>
            <Container>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                
                <Typography sx={{textAlign:'start',fontWeight:'bold',mb:3}} variant="h4">Appointment</Typography>

                <Calendar date={date} setDate={setDate}></Calendar>

            </Grid>
            <Grid item xs={12} md={6}>
                <img src={chair} alt="" width="100%"/>
            
            </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;