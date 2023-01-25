import React, { useState, useEffect } from "react";
import Textfield from "../components/common/textfield";
import Button from "../components/common/button";
function Update() {
  const [oldUserDatatState, setOldUserState] = useState(null);

  useEffect(() => {
    let oldUserData = JSON.parse(localStorage.getItem("editUserData"));
    setOldUserState(oldUserData);
    console.log(oldUserData);
  }, []);
  const editedUser = () => {
    console.log("/////////////////");
  };

  if (oldUserDatatState) {
    return (
      <div>
        <Textfield
          id={"name"}
          label={"Name"}
          type={"text"}
          value={oldUserDatatState.name}
          onChange={(e) => {
            setOldUserState(e.target.value);
          }}
        />{" "}
        <br />
        <Textfield
          id={"email"}
          label={"Email"}
          type={"text"}
          value={oldUserDatatState.email}
          onChange={(e) => {
            setOldUserState(e.target.value);
          }}
        />{" "}
        <br />
        <Button label={"Update"} onClick={editedUser} /> <br />
      </div>
    );
  } else {
    return <div>Loading......</div>;
  }
}
export default Update;
