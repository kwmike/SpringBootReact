import React from 'react'
import { useParams } from 'react-router'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';


function MemberSidebar({mem}) {
    const {id} = useParams();
    const nav = [
        {
            text:'Member Info',
            icon:<AccountBoxIcon/>,
            link: `/members/${id}`
        }, {
            text:'Ships',
            icon:<DirectionsCarFilledOutlinedIcon/>,
            link: `/members/${id}/ships`
        }, {
            text:'Organization',
            icon:<BusinessOutlinedIcon/>,
            link: `/members/${id}/org`
        }
    ]
    const drawerWidth = 240;
    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop: '64px',
            marginBottom: '70px',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {nav.map((text, index) => (
            <NavLink style={{textDecoration: 'none', color:'black'}} to={text.link} key={text.text}>              
                <ListItem button key={text.text}>
                    <ListItemIcon>
                        {text.icon}
                    </ListItemIcon>
                    <ListItemText primary={text.text} />
                </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
    )
}

export default MemberSidebar
