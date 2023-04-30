import { Box } from "@mui/material";
import { Button } from "@mui/material";

//require('assets/ken.png');

export function Task({
  id,
  command,
  hitConfirmable,
  clickCallback = 1,
  alt = false,
  tasksAdded = []
}) {
  const style = { display: "flex", justifyContent: "space-around" };
  const hitConfStr = hitConfirmable ? "Yes" : "No";

  let button;

  if (clickCallback) {
    if (tasksAdded.includes(id)) {
      button = (
        <Button variant="contained" disabled="true">
          Move Added
        </Button>
      );
    } else {
      button = (
        <Button variant="contained" onClick={() => clickCallback(id)}>
          Add Move
        </Button>
      );
    }
  }

  const bgColor = alt ? "rgb(235, 225, 225)" : "rgb(255, 255, 255)";
  return (
    <>
      <Box backgroundColor={bgColor} padding={"1rem"}>
        <div>
          <h5>Command:</h5>
        </div>
        <div style={style}>
          <Box width={"30%"}>{command}</Box>
          <div>Hit Confirmable: {hitConfStr}</div>
          {button}
        </div>
      </Box>
    </>
  );
}
