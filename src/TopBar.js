import { useState } from "react";
import { NotificationsBell } from "./components/NotificationsBell";
import { Box, TextField } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

/*
<TextField
    sx={{height: "24px"}}
    id="outlined-size-small"
    defaultValue="Login"
    size="small"
/>
*/

export function TopBar({props}){

    let isLoggedIn = false;

    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <Box width="40%">
                <div style={{minWidth: "100px", marginRight: "50px"}}>
                    <NotificationsBell/>
                </div>
            </Box>
            <Box>
                <div>
                    <input 
                        type="text" 
                        style={{height: "16px"}}
                        placeholder={"Username"}
                    >
                    </input>
                </div>
            </Box>
        </div>
    )

}