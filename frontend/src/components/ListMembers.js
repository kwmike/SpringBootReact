import React from 'react';
import { Paper } from '@mui/material';
import { shallowEqual, useSelector } from 'react-redux';

export default function ListMembers() {
    var memberData = useSelector((state) => state.members.data,shallowEqual);
    console.log("Render Members MEMBERS: ", memberData);

    
  return (
        memberData.map((member)=>{
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