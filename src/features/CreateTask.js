import { useState } from "react";
import { TextField } from "@mui/material/TextField";
import { ToggleButton, Box, CheckIcon, Dialog } from "@mui/material";
import { SelectCharacter } from "./SelectCharacter";
// task model:
// description, notes, hitconfirmable?, character
//

export function CreateTaskDialog(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [charID, setCharID] = useState(1);
  const [move, setMove] = useState("");
  const [hitToggle, setHitToggle] = useState(false);
  const [notes, setNotes] = useState("");

  return (
    <>
      <SelectCharacter callback={setCharID} />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Box>
        Move:
        <TextField value={move} callback={setMove} />
      </Box>
      <Box>
        Hit confirmable?
        <ToggleButton
          value="check"
          selected={hitToggle}
          onChange={() => {
            hitToggleWrapper(!hitToggle);
          }}
        >
          <CheckIcon />
        </ToggleButton>
      </Box>
      Notes:
      <TextField onInput={setNotes} multiline={true} />
    </>
  );
}
