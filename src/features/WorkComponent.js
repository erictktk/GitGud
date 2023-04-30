import { useState, useRef, useEffect } from "react";
import { Button, LinearProgress, Box, LinearProgressProps, Typography, Card } from "@mui/material";
import { useEditWorkMutation } from "./api/apiSlice";
import  styled from "@emotion/styled";
import { CharacterPortrait } from "./characterDB";


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1}}>
        <LinearProgress variant="determinate" {...props} sx={{ height: '8px', borderRadius: "4px" }} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const InactiveDiv = styled.div`
    background-color: rgba(255, 235, 195, .4);
`;

const ActiveDiv = styled.div`
    background-color: rgb(255, 225, 165);
    animation: bgtransform 3s infinite;

    @keyframes bgtransform {
      0% {background-color: rgb(255, 195, 0);}
      50% {background-color: rgb(255, 225, 165);}
      100% {background-color: rgb(255, 195, 0);)
    }
}
`;

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const WorkComponent = ( {index=0, id=null, characterID, name="", numToDo, isActive=false, parentCallback=null} ) => {
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);

  const [isDone, setIsDone] = useState(false);


  const hitLogic = () => {
    if (isDone) {
      return;
    }

    if (hits === numToDo) {
      setIsDone(true);
      return;
    }
    console.log("hits = " + hits);

    setHits(hits+1);
  };

  const missLogic = () => {
    if (isDone) {
      return;
    }
    setMisses(misses+1);
  };


  /**@type{KeyboardEvent} */
  const keyHandler = (e) => {
    console.log(e);

    if (e.key === "h"){
      console.log("h");
        hitLogic();
    }
    else if (e.key === "m"){
        missLogic();
    } 
    else if (e.key === "ArrowUp" || e.key === "ArrowDown"){
      if (parentCallback){
        //
      }
    }
  }

  const style = {display: "flex", padding: ".5rem"};

  let percentage;
  if ((hits+misses) > 0){ 
    percentage = (hits / (hits + misses) * 100 ).toFixed(2);
  }
  else{
    percentage = "0";
  }

  const divRef = useRef(null);
  useEffect(()=>{
    divRef.current.focus();
    console.log(divRef.current);
  })

  console.log(hits/numToDo);

  let content = (
    <div padding={"2rem"} paddingTop={"0"} style={style} onKeyDown={keyHandler} ref={divRef}>
      <div style={{width: "100%"}}>
        <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>  
        
        <h3>{"  "+name}</h3>
          <CharacterPortrait id={characterID}/>
        </div>

        Progress:
        <LinearProgressWithLabel value={hits/numToDo*100} />
        
        <Box display="flex" width="30%" justifyContent="space-between">
          <Button onClick={hitLogic} variant="contained">Hit!</Button>
          <Button onClick={missLogic} color="error" variant="contained">Miss!</Button>
          Accuracy: {percentage + "%"}
        </Box>
      </div> 
  </div>
  );

  if (isActive){
    return (
      <Card sx={{m: ".25rem"}} onKeyDown={keyHandler} tabIndex={0}>
        <ActiveDiv>
          {content}
        </ActiveDiv>
      </Card>
    )
  }
  else{
    return (
      <Card sx={{m: "1rem", backgroundColor: "transparent" }} onKeyDown={keyHandler} tabIndex={0}>
        <InactiveDiv>
          {content}
        </InactiveDiv>
      </Card>
    )
  }
};
