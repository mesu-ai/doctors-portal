import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logincover from '../../../images/login.png';
import google from '../../../images/google.png';


const Register = () => {
    const [registerData,setRegisterData]=useState({});
    const {userRegistation,googleSingIn,user,isLoading,error}=  useAuth();

   const history= useHistory();
   const location= useLocation();


    const handleOnChange=(e)=>{
      

        const field=e.target.name;
        const value=e.target.value;

        const newRegisterData={...registerData};
        newRegisterData[field]=value;
        setRegisterData(newRegisterData);

         console.log(field,value);

    }

    const handleUserRegister=(e)=>{
      if(registerData.password !== registerData.password2){
        alert('Your password is not match');
        return;
      }
     
      userRegistation(registerData.email,registerData.password,registerData.username,history,location)
      e.preventDefault();
            

    }

    const handleGoogleSingin =()=>{
      googleSingIn(history,location);
      
    }



    return (
        <Box sx={{ flexGrow: 1,mt:3 }}>
        <Container >

          <Grid container spacing={2} sx={{display:'flex',alignItems:'center'}}>
                    
          <Grid item xs={12} sm={6} md={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>

            <Paper sx={{
              boxShadow: 3,            
              p: 4,
              width:'70%',

          }}>

          <Typography variant="h6" gutterBottom component="div">
          Register
          </Typography>

          {isLoading && <CircularProgress /> }

          {user.email ? 
           
           <Alert severity="success">
           <AlertTitle>Success</AlertTitle>
            New User Registered — <strong>Successfully!</strong>
           </Alert> : 

            <form onSubmit={handleUserRegister} >
            
            <TextField sx={{mb:2}} 
            required            
            fullWidth
            onChange={handleOnChange}
            type="text" 
            name="username" 
            id="standard-basic" 
            label="Name" 
            variant="standard" />
            <br/>

            <TextField sx={{mb:2}} 
            required            
            fullWidth
            onChange={handleOnChange}
            type="email" 
            name="email" 
            id="standard-basic" 
            label="Email" 
            variant="standard" />
            <br/>

            <TextField
            required 
            fullWidth
            onChange={handleOnChange}
            id="standard-password-input"
            label="Password"
            type="password"
            name="password"
        
            variant="standard" />

            <br/>
            

            <TextField
            required 
            fullWidth
            onChange={handleOnChange}
            id="standard-password-input"
            label="Re-Password"
            type="password"
            name="password2"
            
            variant="standard" />

            <br/>
            <Typography sx={{color:'crimson',mt:3}} variant="h6" gutterBottom component="div">
           {error}
           </Typography>


            <Button sx={{mt:5}} fullWidth variant="contained" type="submit" >Register</Button>

            </form>
         }

            <Link style={{textDecoration:'none'}} to='/login'>
            <Typography sx={{marginTop:'10px'}} variant="button" display="block" gutterBottom>
             Already Registered? Login Now
            </Typography>
            </Link>

            <Typography sx={{marginTop:'10px',color:'crimson'}} variant="h6" gutterBottom>
             OR
          </Typography>

          <img onClick={handleGoogleSingin} src={google} alt="" width="30px"></img>


            </Paper>

            
            
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'end'}}>

            <img src={logincover} alt="" width="80%"/>
              
            
          </Grid>
          </Grid>


        </Container>
        </Box>
    );
};

export default Register;