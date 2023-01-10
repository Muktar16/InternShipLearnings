import React from "react";
import {Menu} from "antd";

function AppMenu({isInline=false}){
    const onClick = (e) => {
        console.log(e.key);
        return(<></>)
      };
    return(
        <Menu
            style={{backgroundColor:'#010d14',justifyContent:'center', color:'white', fontSize:'20px',border:'none'}}
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
            ]} 
            onClick={onClick}
        ></Menu>
    ) 
}

export default AppMenu;