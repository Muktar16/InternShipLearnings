import React from "react";
import "./AppbarComponent.css"
import { AppBar, useTheme, useMediaQuery, Toolbar,Button, Avatar, Tabs, Tab} from "@mui/material";
import { useState } from "react";
import AppDrawer from "../AppDrawer/AppDrawer";

//import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function AppbarComponent() {

    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'))

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        console.log("Hello")
        setAnchorEl(null);
    };
   

    return (
        <React.Fragment>
            <AppBar sx={{ background: '#457f8c' }}>
                <Toolbar variant="dense" sx={{ height: '115px' }}>
                    <Avatar sx={{ height: '95px', width: '75px' }} alt="Logo" src="./logo2.png" variant="rounded" />
                    <h1 className="logo-text">Chemistry<span>Lab</span><br />
                        <p className="logo-description">Natural Product Research Group</p>
                    </h1>
                    {isMatch ? (<>
                        <AppDrawer></AppDrawer>
                    </>) : (<>
                        <Tabs textColor="#2b2727" sx={{ paddingLeft: '40px', }} value={value} indicatorColor="secondary" 
                            onChange={(e, value) => {setValue(value);console.log("event",e)}}>
                            <Tab label="HOME" />
                            <Tab label="ABOUT US" />
                            
                            
                            <Button label="People" id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                
                                    People
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                            
                            
                            
                                
                            
                            <Tab label="PUBLICATIONS" />
                            <Tab label="RESEARCH FACILITIES" />
                        </Tabs>
                        <Button sx={{ marginLeft: 'auto ' }} variant="contained">Login</Button>
                        <Button sx={{ marginLeft: '10px' }} variant="contained">SignUp</Button>
                    </>)}
                </Toolbar>
            </AppBar>
            
        </React.Fragment>
    );
}



