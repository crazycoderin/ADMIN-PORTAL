import React, { useState, useEffect} from "react";
import Button from "../components/common/button";
import Textfield from "../components/common/textfield";
import Link from "../components/common/link";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isError, setIsError] = useState(false);
  const [isErrorTest, setIsErrorTest] = useState(false);
  let navigate = useNavigate();

  let loginHandle = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userArr = localStorage.getItem("userArr");
    if (!userArr) {
      alert("Please Signup first to login");
    } else {
      let newUserArr = JSON.parse(userArr);
      let loginStatus = false;
      newUserArr.forEach((user) => {
        if (user.password === password && user.email === email) {
          loginStatus = true;
          alert("Log In successfull");
          setIsErrorTest(true);
          localStorage.setItem("logedinUser",JSON.stringify(user));
          navigate("/dasboard");
        }
      });
      if (!loginStatus) {
        setIsError(true);
      }
    }
  };

  useEffect(()=>{
    console.log("I will calll everytime")
  })

  // compontDidMount
  useEffect(()=>{
    console.log("I will calll only on mount")
  },[])

  useEffect(()=>{
    console.log("I will calll only if isError state get update")
  },[isErrorTest])

  return (
    <div>
      <h1>Login Page</h1> <br />
      <Textfield id={"email"} label={"Email"} type={"text"} /> <br />
      <Textfield id={"password"} label={"Password"} type={"password"} /> <br />
      <Button label={"Log In"} onClick={loginHandle} /> <br />
      <Link label= {"Go to signup page"} path={"/signup"}/>
      {/* ------------------------------conditional rendring start -------------------------- */}
      {isError === true ? <div>Invalid credentails</div> : ""} 
  
      {/* ------------------------------conditional rendring end -------------------------- */}

  
    </div>
  )
  }
export default Login;
