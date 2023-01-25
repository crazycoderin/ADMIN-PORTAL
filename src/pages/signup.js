import React, { useState } from "react";
import Button from "../components/common/button";
import Textfield from "../components/common/textfield";
import NativeSelect from "../components/Select";
import Link from "../components/common/link";
function Signup() {
  const [Role, setRole] = useState(null);

  let rolechange = (data) => {
    console.log(data);
    setRole(data);
  };

  let signupHandle = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let Roles = Role;
    console.log(Roles);
    console.log(name);
    console.log(email);
    if(name===""||email===""||password===""||confirmPassword===""){
      alert("write something");
    }else if (password !== confirmPassword) {
      alert("Password not matched");
    } else {
      let userArr = [];
      let localUserArr = localStorage.getItem("userArr");
      if (localUserArr) {
        userArr = JSON.parse(localUserArr);
        console.log(userArr,'userArruserArr');
      }
        let newUser = {
          name: name,
          email: email,
          password: password,
          role: Role,
        };
        userArr.push(newUser);
        localStorage.setItem("userArr", JSON.stringify(userArr));

        alert("New User Added");
      }
    
  };

  return (
    <div>
      <h1>Signup Page</h1> <br />
      <Textfield id={"name"} label={"Name"} type={"text"} /> <br />
      <Textfield id={"email"} label={"Email"} type={"text"} /> <br />
      <Textfield id={"password"} label={"Password"} type={"password"} /> <br />
      <Textfield
        id={"confirmPassword"}
        label={"Confirm Password"}
        type={"password"}
      />{" "}
      <br />
      <NativeSelect onChange={rolechange} />
      <Button label={"Sign Up"} onClick={signupHandle} /> <br />
      <Link label={"Login"} path={"/"} />
    </div>
  );
}

export default Signup;
