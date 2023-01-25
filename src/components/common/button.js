import React from "react";
import Button from "@mui/material/Button";

function ButtonComp(props) {
  return (
    <Button variant="contained" onClick={props.onClick}>
      {props.label}
    </Button>
  );
}
export default ButtonComp;
