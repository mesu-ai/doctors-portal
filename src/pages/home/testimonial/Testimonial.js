import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import patient1 from '../../../images/people-1.png';
import patient2 from '../../../images/people-2.png';
import patient3 from '../../../images/people-3.png';
import TestimonialCard from '../testimonialCard/TestimonialCard';

const Testimonial = () => {

    
    const patientsTestimonials=[

        {
            name:'Winson Herry',
            place:'California',
            img:patient1,
            quota:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum, consequuntur excepturi iste minima aut fuga voluptates dolorem quas impedit! Facere, porro!'
            

        },
        {
            name:'Winson Herry',
            place:'California',
            img:patient2,
            quota:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum, consequuntur excepturi iste minima aut fuga voluptates dolorem quas impedit! Facere, porro!'
            

        },
        {
            name:'Winson Herry',
            place:'California',
            img:patient3,
            quota:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum, consequuntur excepturi iste minima aut fuga voluptates dolorem quas impedit! Facere, porro!'
            

        },


    ]




    return (
        <Box sx={{ flexGrow: 1,my:6 }}>
        <Container>

        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mb:5}}>      
        <div>
        <Typography sx={{color:'info.main',fontWeight:'bold',textAlign:'start'}} variant="h5" gutterBottom component="div">
        TESTIMONIAL
      </Typography>

        <Typography sx={{color:'',fontWeight:'450',textAlign:'start'}} variant="h3" gutterBottom component="div">
        What's Our Patients <br />
        Says
      </Typography>
      </div>
        <Typography sx={{color:'rgb(181, 211, 235)',textAlign:'end'}} variant="h3" gutterBottom component="div">
        <i  className="fas fa-quote-left fa-4x"></i>
        
      </Typography>

      </Box>
      
          
        
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {
                patientsTestimonials.map(testimonial=><TestimonialCard testimonial={testimonial} key={Math.random()}></TestimonialCard>)
            }

      </Grid>
      </Container>
     </Box>


        
    );
};

export default Testimonial;