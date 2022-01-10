import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAllShips } from '../state/ships/shipSlice';

export default function ListShips() {
    const shipData = useSelector(selectAllShips);
    console.log("Render List Ships shipData: ", shipData);
  return (
    // ships.map((ship)=>{
    //         return(<Paper elevation={6} style={{margin:"10px", padding:"15px",textAlign:"left"}} key={ship.id}>
    //                 Id: {ship.id}<br/>
    //                 Name: {ship.name}<br/>
    //             </Paper>
    //         );
    //     })
    shipData.map(ship => {
        console.log('SHIP', ship)
        var shipImage = null;
        if (ship != null) {
            if (ship.media[0].depot !== "LOCAL_MEDIA") {
                shipImage = ship.media[0].images.banner
            } else {
                shipImage = "MISSING IMAGE"
            }
            return (<Paper elevation={6} style={{margin:"10px", padding:"15px",textAlign:"left"}} key={parseInt(ship.id)}>
                Id: {ship.id}<br/>
                Name: {ship.name}<br/>
                Media: <img style={{maxWidth:'100%'}} src={shipImage} alt={shipImage}/><br />
                Manufacturer: {ship.manufacturer.code} : {ship.manufacturer.name}<br />
                Purpose: {ship.focus}<br />
                Price: {ship.price !== 0 ? `$${ship.price}.00` : 'Unknown'}
            </Paper>)
        } else {
            return <></>
        }
    })
    // <p>{JSON.stringify(shipData[0].id)}</p>
    // <p>{parseInt(shipData[0].id)}</p>
    )
}