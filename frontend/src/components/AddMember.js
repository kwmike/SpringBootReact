import React, {useState} from 'react'
import { Button, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ClassNames } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { addMember } from '../state/members/memberSlice';
const fieldStyle = {padding:'10px'}
const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
function AddMember({closeFunc}) {
    const dispatch = useDispatch();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        const member = {fname, lname, email};
        dispatch(addMember(member));
        closeFunc()
    }
    return (
        <div>
            <Paper elevation={3} style={paperStyle}>
            <h1 style={{textAlign:'center'}}><u>Add Member</u></h1><br/>
            <form className={ClassNames.root} noValidate autoComplete="off">
                <TextField style={fieldStyle} id="fname" label="First Name" variant="outlined" value={fname} fullWidth onChange={(e) => setFname(e.target.value)}/>
                <TextField style={fieldStyle} id="lname" label="Last Name" variant="outlined" value={lname} fullWidth onChange={(e) => setLname(e.target.value)}/>
                <TextField style={fieldStyle} id="email" label="Email" variant="outlined" value={email} fullWidth onChange={(e) => setEmail(e.target.value)}/>
                <Button variant='contained' color='secondary' onClick={handleClick} type='submit'>Submit</Button>
            </form>
        </Paper>
        </div>
    )
}

export default AddMember
