import React from 'react';
import AppointmentBanner from './appoinmentBanner/AppointmentBanner';
import Services from './services/Services';

const Home = () => {
    return (
        <div>
            <h3>Home Page</h3>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            
        </div>
    );
};

export default Home;