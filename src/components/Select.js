import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectAutoWidth(props) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    props.onChange(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChange}
          autoWidth
          label="Role"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Admin">Admin </MenuItem>
          <MenuItem value="Manager">Manager</MenuItem>
          <MenuItem value="Viewer">Viewer</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
