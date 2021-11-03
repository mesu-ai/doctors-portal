import React from 'react';
import AppointmentBanner from './appoinmentBanner/AppointmentBanner';
import HomeBanner from './homeBanner/HomeBanner';
import Services from './services/Services';

const Home = () => {
    return (
        <div>
            
            <HomeBanner></HomeBanner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            
        </div>
    );
};

export default Home;