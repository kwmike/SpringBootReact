import React from 'react'
import { useEffect } from 'react';
import { Container, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getAllMembers } from '../state/action-creators';
import ListMembers from '../components/ListMembers';
import MemberModal from '../components/Modal';
const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
function Home() {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMembers());
    }, [dispatch])
    return (
        <Container>
            <MemberModal />
            <Paper elevation={3} style={paperStyle}>
                <h1>Members</h1>
                <ListMembers />
            </Paper>
        </Container>
    )
}

export default Home
