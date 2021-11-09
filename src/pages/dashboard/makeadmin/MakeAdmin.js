import { Button, TextField } from '@mui/material';
// import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail]=useState([]);
    const {token}=useAuth();
   
    const handleEmail=(e)=>{
        setEmail(e.target.value);

    }
    const handleAdmin=(e)=>{
      const user={email:email};
        
      fetch('http://stark-oasis-62897.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(result=>{
                 alert('successfully');
                 console.log(result);
             })

        // axios.put('http://localhost:5000/users/admin',user)
        // .then(result=>{
        //     alert('successfully');
        //     console.log(result)
        // })


        e.preventDefault();

    }
    return (
        <div>
            <h3>Make Admin</h3>
            
            <form style={{marginTop:'100px'}} onSubmit={handleAdmin}>
            
            <TextField sx={{width:'40%'}} type="email" onBlur={handleEmail} label="Admin Email" variant="standard" />

            <Button type="submit" variant="contained">make admin</Button>

            </form>

            
        </div>
    );
};

export default MakeAdmin;