import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = ({date}) => {
    const {user}=useAuth();
    const [appointment,setAppointment]=useState([]);
     console.log (date);
    
     const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`;
   
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAppointment(data));


    },[date]);
    return (
        <div>
            <h3>{appointment.length}</h3>

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
                    key={row.name}
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