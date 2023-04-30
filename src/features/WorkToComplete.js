import { useState } from "react";
import shuffle from "shuffle-array";
import { WorkComponent } from "./WorkComponent";
import { Box } from "@mui/material";
import { useGetRandomTaskSetTasksQuery } from "./api/apiSlice";
import { Spinner } from "../components/Spinner";

import parry from "../assets/parry.png";
import bg from "../assets/subway2.jpg";

/**
 * 
 * @param {Array<Task>} task
 */
export function WorkToComplete({tasks}){
    /*
        task: {
        id: primaryKey(nanoid),
        userID: String,
        name: String,
        character: Number,
        hitConfirmable: Boolean,
        suggestedTimes: Number,
        notes: String
    },
    */

    //const orderedTasks = [...tasks];
    const [activeTask, setActiveTask] = useState(0);

    const {
        data: taskSet = [],
        isFetching,
        isSuccess
      } = useGetRandomTaskSetTasksQuery();

    /**
     * 
     * @param {KeyboardEvent} e 
     */
    const keyHandler = (e) => {
        if (e.key === "Down"){
            setActiveTask(Math.min(tasks.length-1, activeTask+1));
        }
        else if (e.key === "Up"){
            setActiveTask(Math.max(tasks.length-1, activeTask-0));
        }
    }

    let content = [];

    if (isFetching){
        content = <Spinner text="Getting random task set..." />;
    }
    else if(isSuccess){
        content = [];
        console.log("isSuccess!");
        for(let i = 0; i < taskSet.tasks.length; i += 1){
            console.log(taskSet.tasks);

            
            const task = taskSet.tasks[i];
            console.log("numToDo = " + task.suggestedTimes);
            const cur = 
            <WorkComponent
                key={i}
                index={i}
                characterID={task.character}
                name={task.name}
                numToDo={task.suggestedTimes}
                isActive={i === activeTask}
            />;
            content.push(cur);
        }
    }
    const style = {
        backgroundBlendMode: "overlay",
        backgroundImage: `url(${bg})`,
        backgroundColor: "rgba(250, 250, 255, .9)",
        backgroundRepeat: "no-repeat",
        backgroundAuto: "auto",
        backgroundSize: "cover",
        margin: "0px",
        padding: "0px"
      };

    return (
        <div style={style}>
            <Box sx={{ml: "1rem"}}>
                <h2>Work to Complete!</h2>
            </Box>
            {content}
        </div>
    )
}