import React from 'react';
import { Paper } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ListMembers() {
    var members = useSelector((state) => state.members);
    console.log("Render Members MEMBERS: ", members);

    
  return (
        members.data.map((member)=>{
            return(<Paper elevation={6} style={{margin:"10px", padding:"15px",textAlign:"left"}} key={member.id}>
                    Id: {member.id}<br/>
                    First Name: {member.fname}<br/>
                    Last Name: {member.lname}<br/>
                    Email: {member.email}<br/>
                </Paper>
            );
        })
  );
}