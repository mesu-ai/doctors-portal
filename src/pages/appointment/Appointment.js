import React from 'react';
import AbailableAppointment from './abailableAppointment/AbailableAppointment';
import AppointmentHeader from './appointmentHeader/AppointmentHeader';





const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

   
    
    return (
        <div>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AbailableAppointment date={date}></AbailableAppointment>
            


        </div>
    
    );
};

export default Appointment;