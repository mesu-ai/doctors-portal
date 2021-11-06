import React from 'react';
import AppointmentBanner from './appoinmentBanner/AppointmentBanner';
import Contractus from './contractUs/Contractus';
import ExceptionalDental from './exceptionelDental/ExceptionalDental';
import HomeBanner from './homeBanner/HomeBanner';
import InfoCard from './InfoCard/InfoCard';
import Services from './services/Services';
import Testimonial from './testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            
            
            <HomeBanner></HomeBanner>
            <InfoCard></InfoCard>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Contractus></Contractus>
            
            
        </div>
    );
};

export default Home;