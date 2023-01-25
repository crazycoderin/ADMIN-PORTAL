import React, { useState } from "react";
import Textfield from "../components/common/textfield";
import Button from "../components/common/button";
import * as UTILLS from "../utills"
import { useNavigate } from "react-router-dom";
function Update() {
  let oldUserData=UTILLS.getFromLocalStorage("editUserData");
  const navigate=useNavigate();
  const [oldNameState, setNameState] = useState(oldUserData.name);
  const [oldEmailState, setEmailState] = useState(oldUserData.email);
  // const[loading,setLoading]=useState(false)
  const editedUser = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let userArr = JSON.parse(localStorage.getItem("userArr"));
    let newData =oldUserData;
    newData.email=email;
    newData.name=name;
    let oldUserIndex;
    for (const [index,user] of userArr.entries()) {
      console.log(user.email,oldEmailState);
      if(user.email===oldEmailState){
        oldUserIndex=index;
      }
    }
    userArr[oldUserIndex]=newData;
    console.log(userArr);
    localStorage.setItem("userArr",JSON.stringify(userArr));
    navigate("/dasboard");
  };
  return (
    <div>
      <Textfield
        id={"name"}
        label={"Name"}
        type={"text"}
        defaultValue={oldNameState}
      />{" "}
      <br />
      <Textfield
        id={"email"}
        label={"Email"}
        type={"text"}
        defaultValue={oldEmailState}
             />{" "}
      <br />
      <Button label={"Update"} onClick={editedUser} /> <br />
    </div>
  );
}
export default Update;
