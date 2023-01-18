
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function AppDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);


    return (
        <React.Fragment>
            <Drawer sx={{ marginLeft: 'auto' }} open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{ background: '#dce3da' }}>
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>About</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>People</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Publications</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Research Facilities</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}