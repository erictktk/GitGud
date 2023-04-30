import { useState } from "react";
import { useGetAllTaskSetsQuery } from "../api/apiSlice";
import TaskSetCard from "./TaskSetCard";
import { Spinner } from "../../components/Spinner";

export function TaskSetList() {
  const {
    data: taskSetList = [],
    isFetching,
    isSuccess
  } = useGetAllTaskSetsQuery();

  let content;
  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = [];
    console.log("taskSetList success =");
    console.log(taskSetList);
    for (let i = 0; i < taskSetList.length; i += 1) {
      const curCard = <TaskSetCard key={i} taskSet={taskSetList[i]} />;
      content.push(curCard);
    }
  }

  return (
    <div
      style={{
        backgroundColor: "rgb(235, 235, 255)",
        minHeight: "100%",
        padding: "5px",
        //backgroundColor: "rgba(250, 250, 255, .80)",
        backgroundImage: "linear-gradient(rgb(235, 242, 255), rgb(255, 255, 255))"
      }}
    >
      
      <h2>
        <><span>&nbsp; &nbsp;</span>Move Lists:</>
      </h2>
      {content}
    </div>
  );
}
