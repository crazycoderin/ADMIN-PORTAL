import React from "react";
import TextField from "@mui/material/TextField";

function TextfieldComp(props) {
  return (
    <TextField
      defaultValue={props.defaultValue}
      id={props.id}
      label={props.label}
      variant="outlined"
      type={props.type}
      style={{ margin: "10px" }}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default TextfieldComp;
