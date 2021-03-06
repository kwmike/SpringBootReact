import React from 'react';
import { Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function ListMembers() {
    const memberData = useSelector((state) => state.members.data);
    console.log("Render Members MEMBERS: ", memberData);

    
  return (
        memberData.map((member)=>{
            return(<Paper elevation={6} style={{margin:"10px", padding:"15px",textAlign:"left"}} key={member.id}>
                    Id: {member.id}<br/>
                    First Name: {member.fname}<br/>
                    Last Name: {member.lname}<br/>
                    Email: {member.email}<br/>
                    <NavLink className='btn btn-dark' to={`/members/${member.id}`}>View Member</NavLink>
                </Paper>
            );
        })
  );
}