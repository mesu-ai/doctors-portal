import React from 'react';
import Header from '../../components/header/Header';
import AbailableAppointment from './abailableAppointment/AbailableAppointment';
import AppointmentHeader from './appointmentHeader/AppointmentHeader';





const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

   
    
    return (
        <div>
            <Header></Header>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AbailableAppointment date={date}></AbailableAppointment>
            


        </div>
    
    );
};

export default Appointment;