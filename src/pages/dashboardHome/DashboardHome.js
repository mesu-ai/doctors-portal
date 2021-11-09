import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Calendar from '../../components/shared/calendar/Calendar';
import Appointments from '../dashboard/appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date().toLocaleDateString());

    

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Calendar date={date} setDate={setDate}></Calendar>
                
            </Grid>
            <Grid item xs={12} md={7}>
              <Appointments date={date}></Appointments>
                
            </Grid>
        </Grid>
    );
};

export default DashboardHome;