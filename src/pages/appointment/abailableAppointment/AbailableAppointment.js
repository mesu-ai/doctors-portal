import { Typography } from '@mui/material';
import React from 'react';
import AppointmentBooking from '../appointmentBooking/AppointmentBooking';

const AbailableAppointment = ({date}) => {






    return (
        
        <div>

            <Typography sx={{fontWeight:'bold',color:'info.main',mt:3}} variant="h5">
                Abailable Appointment On {date.toDateString()}
            </Typography>
            <AppointmentBooking date={date}></AppointmentBooking>


        </div>
    );
};

export default AbailableAppointment;