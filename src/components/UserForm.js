import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/UserForm.css";
import { v4 } from "uuid";
import { addUser } from "../store/users/users";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ firstName, lastName, age, id: v4() }));

    setFirstName("");
    setLastName("");
    setAge("");
  };

  return (
    <div className="userform__container">
      <div className="userform">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            name="firstname"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            name="lastname"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="age">Age</label>
          <input
            name="age"
            placeholder="Enter Age"
            type="text"
            onChange={(e) => setAge(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Add Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
