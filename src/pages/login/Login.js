import { Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box} from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory,useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logincover from '../../images/login.png';

const Login = () => {
  const [loginData,setLoginData]=useState([]);
  const {userLogin,isLoading,error} =useAuth();
  
  const location=useLocation();
  const history= useHistory();


  const handleOnChange=(e)=>{
    const field=e.target.name;
    const value=e.target.value;


    const newLoginData={...loginData};
    newLoginData[field]=value;
    setLoginData(newLoginData);

    // console.log(field,value);



  }

  const handleUserLogin=(e)=>{
     userLogin(loginData.email,loginData.password,history,location)
    e.preventDefault();

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
      Login
      </Typography>

         {isLoading ? <CircularProgress/> : 

          <form onSubmit={handleUserLogin} >
          
          <TextField sx={{mb:2}}
          onChange={handleOnChange}  
          required
          fullWidth
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

          <Typography sx={{color:'crimson',mt:3}} variant="h6" gutterBottom component="div">
           {error}
          </Typography>


          <Button sx={{mt:5}} fullWidth variant="contained" type="submit">Login</Button>

          </form>
         }

          <Link style={{textDecoration:'none'}} to='/register'>
            <Typography sx={{marginTop:'10px'}} variant="button" display="block" gutterBottom>
             New User? Register Now
            </Typography>
          </Link>

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

export default Login;