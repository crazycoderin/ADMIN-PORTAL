import React from "react";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

function LinkComp(props) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(props.path);
  }

  return (
    <Link href={undefined} underline="hover" onClick={handleClick}>
      {props.label}
    </Link>
  );
}

export default LinkComp;
