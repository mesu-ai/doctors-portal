import {  Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = ({service}) => {
    const {title,img,description}=service;



    return (
        <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ border: 0, boxShadow: 0}} >
        {/* sx={{ maxWidth: 345 }} */}
            <CardActionArea>
                <CardMedia
                sx={{mx:"auto"}}
                component="img"
                style={{width:'auto',height:'50px'}}
                image={img}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography  variant="body2" color="text.secondary " sx={{textAlign:'justify'}}>
                   {description}
                </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            </CardActions> */}
        </Card>
               
        </Grid>
        
    );
};

export default Service;