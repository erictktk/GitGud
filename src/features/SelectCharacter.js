import { useState } from "react";
import { charNameArr, charImgArr } from "./characterDB";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/utils";

export function SelectCharacter({ callback }) {
  const [charID, setCharID] = useState(1);

  const handleChange = (e) => {
    setCharID(e.target.value);
    console.log(e.target.value);
    if (callback) {
      callback(e.target.value);
    }
  };

  const chars = [];
  for (let i = 1; i < charNameArr.length; i += 1) {
    chars.push(<MenuItem value={i}>{charNameArr[i]}</MenuItem>);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Character</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={charID}
        label="Select Character"
        onChange={handleChange}
      >
        {chars}
      </Select>
    </FormControl>
  );
}
