
import { Drawer, IconButton, List,useMediaQuery,useTheme, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function AppDrawer(){
    const [openDrawer,setOpenDrawer] = useState(false);
    

    return(
        <React.Fragment>
            <Drawer sx={{marginLeft:'auto'}} open={openDrawer} onClose={()=>setOpenDrawer(false)}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton sx={{color:'white' ,marginLeft:'auto'} } onClick={()=>setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}