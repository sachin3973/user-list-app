import React from "react";
import "../css/UserList.css";
import "../css/UpdateInfo.css";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, updateUser } from "../store/users/users";
import UpdateInfo from "./UpdateInfo";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeUser(id));
  };

  const handleUpdate = (id) => {
    const container = document.querySelector(".toggle_hide");
    container.classList.add("show_container");
    dispatch(updateUser(id));
  };

  return (
    <div className="userList__container">
      <ul>
        {users.map((user) => (
          <div className="user__block">
            <li>
              <span>
                Name: {user.firstName} {user.LastName} | Age: {user.age} | ID:
                {user.id}
              </span>
            </li>
            <div className="button__group">
              <button onClick={() => handleUpdate(user.id)}>Update</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
            <UpdateInfo />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
