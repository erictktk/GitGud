import NotificationsIcon from '@mui/icons-material/Notifications';
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from 'react';

function Notifications({num}){

}

export function NotificationsBell({prop0}){
    let numNotifications = 3;

    let size = ".5rem";
    let circleSize = ".1em";

    const bellStyle = {
        position: 'absolute',
        width: '.9em',
        height: '.9em',
        color: 'black',
        marginRight: "50px"
    }

    const circleContainerStyle = {
        width: '.5em',
        height: '.5em',
        position: 'absolute',
        left: '.5em',
        zIndex: 1,
        color: 'white',
        marginRight: "50px"
    }

    console.log(circleContainerStyle);

    const actualCircle = {...circleContainerStyle};
    actualCircle.zIndex = 3
    actualCircle.color = 'red';
    actualCircle.width = '.4em';
    actualCircle.height= '.4em';
    actualCircle.left = '.6em';

    
    return (
        /*
        <div style={style}>
            <div style={bellStyle}>
                <NotificationsIcon style={bellStyle}/>
            </div>
            <div style={circleContainerStyle}>
                <CircleIcon style={actualCircle}/>
            </div>
        </div>
        */
        <div style={{position: "relative", backgroundColor: "blue", width: "100px", marginRight: "100px"}}>
            <NotificationsIcon style={bellStyle}/>
            
            <CircleIcon style={circleContainerStyle}/>
            <CircleIcon style={actualCircle}/>
        </div>
    )
}
