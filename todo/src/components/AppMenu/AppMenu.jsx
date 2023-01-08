import React from "react";
import {Menu} from "antd";

function AppMenu({isInline=false}){
    return(
        <Menu
            style={{backgroundColor:'blueviolet', color:'white', fontSize:'20px',border:'none'}}
            mode={isInline? 'inline':'horizontal'}
            items={[
            {
                label:'Home',
                key:'home'
            },
            {
                label:'Create New Task',
                key:'createNew'
            },
            {
                label:'About Us',
                key:'about'
            },
            {
                label:'Contact Us',
                key:'contact'
            },
            ]} 
        ></Menu>
    ) 
}

export default AppMenu;