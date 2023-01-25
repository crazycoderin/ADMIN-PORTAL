import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
function TableComp(props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let logedinUser = JSON.parse(localStorage.getItem("logedinUser"));
  const handleDeleteUser = (user) => {
    setLoading(true);
    localStorage.setItem("deleteUserData", JSON.stringify(user));
    let oldUserIndex;
    for (const [index, use] of props.userArr.entries()) {
      if (use.email === user.email) {
        oldUserIndex = index;
        console.log(use.email);
        console.log(oldUserIndex, "olduserindex");
      }
    }
    console.log(props.userArr);
    setTimeout(() => {
      props.userArr.splice(oldUserIndex, 1);
      localStorage.setItem("userArr", JSON.stringify(props.userArr));
      window.location.reload();
    }, [2000]);
  };
  const handleEditUser = (user) => {
    localStorage.setItem("editUserData", JSON.stringify(user));
    navigate("/dasboard/update");
    console.log(user);
  };
  useEffect(() => {
    console.log("0000000000");
    setLoading(false);
  }, [props.userArr.length]);
  return (
    <form>
      {loading ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.userArr.map((user, index) => (
              <tr key={user.name}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {logedinUser.role === "Admin" ||
                  logedinUser.role === "Manager" ? (
                    <Button label="Edit" onClick={() => handleEditUser(user)} />
                  ) : (
                    ""
                  )}
                  {logedinUser.role === "Admin" ? (
                    <Button
                      label="Delete"
                      onClick={() => handleDeleteUser(user)}
                    />
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </form>
  );
}

export default TableComp;
