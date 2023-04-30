import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { TopBar } from "./TopBar";
import { AddTaskList } from "./features/AddTaskList";
import { FixedDrawer } from "./features/Drawer";
import { TaskSetList } from "./features/lists/TaskSetList";

import {Daily} from "./features/daily/Daily";
import {Progress} from "./features/progress/Progress"
import {WorkToComplete} from "./features/WorkToComplete";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

//<AddTaskList />

const drawerWidth = 250;

function App() {
  return (
    <Router>
      <Box display={'flex'} sx={{p:"0px", m:"0px"}}>
        <FixedDrawer drawerWidth={drawerWidth}/>
        <Box component="main" sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          <TopBar />
          <Divider />
          <div className="App">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <>
                    <WorkToComplete></WorkToComplete>
                  </>
                )}
              />
              
              <Route exact path="/daily" render={()=><Daily/>}/>
              <Route exact path="/progress" component={Progress}/>
              <Redirect to="/" />
            </Switch>
            
          </div>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
