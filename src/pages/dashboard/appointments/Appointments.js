import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = ({date}) => {
    const {user,token}=useAuth();
    const [appointment,setAppointment]=useState([]);
    //  console.log (date);
    
     const url = `http://stark-oasis-62897.herokuapp.com/appointments?email=${user.email}&date=${date}`;
   
    useEffect(()=>{
        fetch(url,{
            headers:{
                'authorization':`Bearer ${token}`,
            }
            
        })
        .then(res=>res.json())
        .then(data=>setAppointment(data));


    },[date, token, url]);
    return (
        <div>
            <h3>Total Appointment: {appointment.length}</h3>

            <TableContainer component={Paper}>
            <Table sx={{ }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Patient Name</TableCell>
                    <TableCell align="right">Shedule</TableCell>
                    <TableCell align="right">Action</TableCell>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                {appointment.map((row) => (
                    <TableRow
                    key={Math.random()}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.patientName}
                    </TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            
        </div>
    );
};

export default Appointments;