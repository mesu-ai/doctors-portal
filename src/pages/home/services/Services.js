import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import { Container, Grid, Typography } from '@mui/material';
import Service from '../service/Service';
import { Box } from '@mui/system';

const Services = () => {
    const ourServices=[
        {
            
            img:fluoride,
            title:"Fluoride Treatment",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ratione aut est non iusto maiores unde facilis praesentium expedita quo, iure officia dignissimos, distinctio nulla obcaecati tempore cum tempora eum!",
        },
        {
            img:cavity,
            title:"Cavity Filling",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ratione aut est non iusto maiores unde facilis praesentium expedita quo, iure officia dignissimos, distinctio nulla obcaecati tempore cum tempora eum!",
        },
        {
            img:whitening,
            title:"Teath Whitening",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ratione aut est non iusto maiores unde facilis praesentium expedita quo, iure officia dignissimos, distinctio nulla obcaecati tempore cum tempora eum!",
        },



    ]




    return (
        <Box sx={{ flexGrow: 1,mx: "auto",mb:10}}>
        <Container>   
        <Typography component="div">
        <Box  sx={{ textAlign: 'center', m: 1,fontSize:24,fontWeight:500,color:'#2196f3' }}>Our Services</Box>
        <Box sx={{ textAlign: 'center', m: 1,fontWeight: 'bold',fontSize:40,mb:5 }}>Services We Provide</Box>
        </Typography>
        
        <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                ourServices.map(service=><Service service={service} key={Math.random()}></Service>)
            }
        </Grid>
        </Container> 
        </Box>
    );
};

export default Services;