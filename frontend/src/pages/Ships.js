import React from 'react'
import { useEffect } from 'react';
import { Container, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import ListShips from '../components/ListShips';
import { fetchAllShips } from '../state/ships/shipSlice';
const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
function Ships() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllShips());
    }, [dispatch])
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Ships</h1>
                <ListShips />
            </Paper>
        </Container>
    )
}

export default Ships
