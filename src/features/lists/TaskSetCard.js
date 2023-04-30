import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarRatings from "react-star-ratings";
import { charNameArr, charImgArr } from "../characterDB";

function DisplayCharacters({nameOrNameArray}){

}

export default function TaskSetCard({ id = 0, taskSet=null }) {
  console.log(taskSet);
  return (
    <Card sx={{ minWidth: 275, m: ".5rem" }}>
      <CardContent display="flex">
        <Box display="flex" justifyContent="space-between">
          <Box display="block">
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              Move set
            </Typography>
            <Typography variant="h5" component="div" fontWeight="bold">
              {taskSet.name}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="h5" component="div" marginRight="2rem">
                {charNameArr[taskSet.character]}
            </Typography>
            <img src={charImgArr[taskSet.character]}></img>
          </Box>
          
        </Box>
        <Typography variant="body2">
          {taskSet.description}
        </Typography>
      </CardContent>
      <Box display={"flex"}>
        <Box width={"60%"}>
          <CardActions>
            <Button size="small">See Move List >>></Button>
          </CardActions>
        </Box>
        <Box>
          Difficulty: <StarRatings rating={taskSet.difficulty} starDimension="20px" starSpacing="0px"/>
        </Box>
      </Box>

    </Card>
  );
}
