import React from "react";
import "./AppbarComponent.css"
import { AppBar, useTheme, useMediaQuery, Toolbar, Button, Avatar, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import AppDrawer from "../AppDrawer/AppDrawer";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function AppbarComponent() {

    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
    const [peopleAnchorEl, setPeopleAnchorEl] = useState(null);
    const [publicationsAnchorEl, setPublicationsAnchorEl] = useState(null);
    const openPeopleMenu = Boolean(peopleAnchorEl);
    const openPublicationsMenu = Boolean(publicationsAnchorEl);

    const peopleHandleClick = (event) => {
        setPeopleAnchorEl(event.currentTarget);
    };
    const publicationsHandleClick = (event) =>{
        setPublicationsAnchorEl(event.currentTarget);
    }
    const peopleMenuHandleClose = () => {
        setPeopleAnchorEl(null);
    };
    const publicationMenuHandleClose = () => {
        setPublicationsAnchorEl(null);
    }


    return (
        <React.Fragment>
            <Menu anchorEl={peopleAnchorEl} open={openPeopleMenu} onClose={peopleMenuHandleClose} MenuListProps={{'aria-labelledby': 'people-button'}}>
                <MenuItem onClick={peopleMenuHandleClose}>Faculties</MenuItem>
                <MenuItem onClick={peopleMenuHandleClose}>Graduates</MenuItem>
                <MenuItem onClick={peopleMenuHandleClose}>Undergraduates</MenuItem>
            </Menu>
            <Menu anchorEl={publicationsAnchorEl} open={openPublicationsMenu} onClose={publicationMenuHandleClose} MenuListProps={{'aria-labelledby': 'publications-button'}}>
                <MenuItem onClick={publicationMenuHandleClose}>Books</MenuItem>
                <MenuItem onClick={publicationMenuHandleClose}>Journals</MenuItem>
                <MenuItem onClick={publicationMenuHandleClose}>Conferences</MenuItem>
            </Menu>


            <AppBar sx={{ background: '#457f8c' }}>
                <Toolbar variant="dense" sx={{ height: '115px' }}>
                    <Avatar sx={{ height: '95px', width: '75px' }} alt="Logo" src="./logo2.png" variant="rounded" />
                    <h1 className="logo-text">Chemistry<span>Lab</span><br />
                        <p className="logo-description">Natural Product Research Group</p>
                    </h1>
                    {isMatch ? (<AppDrawer></AppDrawer>) : (<>
                    <Tabs textColor="#2b2727" sx={{ paddingLeft: '40px', }} value={value} indicatorColor="secondary"
                        onChange={(e, value) => { setValue(value); console.log("event", e) }}>
                        <Tab label="HOME" />
                        <Tab label="ABOUT US" />
                        <Tab label="People" id="people-button" onClick={peopleHandleClick}/>   
                        <Tab label="PUBLICATIONS" id="publications-button" onClick={publicationsHandleClick}/>
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



