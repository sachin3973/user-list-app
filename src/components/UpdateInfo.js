import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/UpdateInfo.css";
import { updateUser } from "../store/users/users";

const UpdateInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const handleUpdate = (id) => {
    dispatch(updateUser(id));
  };

  return (
    <div className="container toggle_hide">
      {users.map((user) => (
        <form onSubmit={() => handleUpdate(user.id)}>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="age">Age</label>
          <input name="age" type="text" placeholder="Age" />
          <button type="submit" onClick={() => handleUpdate(user.id)}>
            Update Me
          </button>
        </form>
      ))}
    </div>
  );
};

export default UpdateInfo;
