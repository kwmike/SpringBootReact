import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import {useNavigate, NavLink, useLocation, useParams} from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const params = useParams();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavClick = (loc) => {
    handleClose()
    navigate(loc)
  }
  var showMembers = false;
  var locCheck = new RegExp(/^\/members.+/i);
  console.log("PATHNAME NAVBAR", pathname);
  if (locCheck.test(pathname)) {
    showMembers = true;
  }
  console.log("SHOW MEMBERS", showMembers);
  const nav = [
    {
      text: 'Home',
      icon: <HomeOutlinedIcon/>,
      link: '/'
    },{
      text: 'Members',
      icon: <ListOutlinedIcon/>,
      link: '/members',
      subPages: [
        {
          text:'Member Info',
          icon:<AccountBoxIcon/>,
          link: `/members/${params.id}`
        }, {
          text:'Member Ships',
          icon:<DirectionsCarIcon/>,
          link: `/members/${params.id}/ships`
        }, {
          text:'Member Organization',
          icon:<BusinessIcon/>,
          link: `/members/${params.id}/org`
        }
      ]
    },{
      text: 'Ships',
      icon: <DirectionsCarFilledOutlinedIcon/>,
      link: '/ships'
    }
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <List>
              {nav.map((page, index) => {
                if (showMembers && page.text==="Members") {
                  return <MemberSubpages pages={page.subPages} handleNavClick={handleNavClick}/>
                } else {
                  return (
                    <NavLink style={{textDecoration: 'none', color:'black'}} to={page.link} key={page.text} onClick={handleNavClick}>              
                      <ListItem button key={page.text}>
                        <ListItemIcon>
                            {page.icon}
                        </ListItemIcon>
                        <ListItemText primary={page.text} />
                      </ListItem>
                    </NavLink>
                  );
                }
              })}
            </List>
            {/* <MenuItem onClick={e=>handleNavClick('/')}>Home</MenuItem>
            <MenuItem onClick={e=>handleNavClick('/members')}>Members</MenuItem>
            <MenuItem onClick={e=>handleNavClick('/ships')}>Ships</MenuItem> */}
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Spring Boot React Full Stack Application with PostgreSQL Database
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const MemberSubpages = ({pages,handleNavClick}) => {
  console.log("MEMBER SUBPAGES", pages);
  return (
    pages.map(page => {

      return (
        <NavLink style={{textDecoration: 'none', color:'black'}} to={page.link} key={page.text} onClick={handleNavClick}>              
          <ListItem button key={page.text}>
            <ListItemIcon>
                {page.icon}
            </ListItemIcon>
            <ListItemText primary={page.text} />
          </ListItem>
        </NavLink>
      );
    })
  );
}