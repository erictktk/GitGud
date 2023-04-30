import { useState } from "react";
import { useGetCharacterTasksQuery } from "./api/apiSlice";
import { Spinner } from "../components/Spinner";
import Divider from "@mui/material/Divider";
import { charNameArr, charImgArr } from "./characterDB";
import { Box } from "@mui/material";
import { Task } from "./Task";

export function ModalBG({ children, alpha = 0.2 }) {
  const bgColorStr = `rgba(0, 0, 0, ${alpha})`;
  const style = {
    width: "100%",
    height: "100%",
    backgroundColor: bgColorStr,
    position: "fixed",
    zIndex: 1
  };
  return <div style={style}>{children}</div>;
}

export function AddTaskList({ charID = 3, useModal = false }) {
  //const { data: post, isFetching, isSuccess } = useGetPostQuery(postId)

  const {
    data: tasks = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetCharacterTasksQuery(charID);

  console.log("tasks = ");
  console.log(tasks);

  let content;
  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = [];

    const stuff = [];
    for (let i = 0; i < tasks.length; i += 1) {
      const task = (
        <Task
          key={i * 2}
          id={tasks[i].id}
          command={tasks[i].name}
          hitConfirmable={tasks[i].hitConfirmable}
          alt={i % 2 === 1}
        />
      );
      stuff.push(task);
      if (i !== tasks.length - 1) {
        stuff.push(<Divider key={i * 2 + 1} />);
      }
    }

    content = (
      <div>
        <Box
          color="white"
          fontSize="3rem"
          fontStyle="bold"
          backgroundColor={"rgb(0, 155, 255)"}
          display={"flex"}
          justifyContent={"space-between"}
          padding=".25rem"
          paddingLeft={"1rem"}
          paddingRight={"1rem"}
        >
          <div>
            <h2 style={{ color: "rgba(255, 255, 255, .8)" }}>
              {charNameArr[charID]}
              (Suggested Moves)
            </h2>
          </div>
          <img src={charImgArr[charID]} />
        </Box>
        {stuff}
      </div>
    );
  }

  if (!useModal) {
    return <section>{content}</section>;
  } else {
    //
  }
}
