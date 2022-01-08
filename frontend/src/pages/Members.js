import React from 'react'
import { useEffect } from 'react';
import { Container, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import ListMembers from '../components/ListMembers';
import MemberModal from '../components/Modal';
import { fetchMembers } from '../state/members/memberSlice';
const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
function Members() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMembers());
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

export default Members
