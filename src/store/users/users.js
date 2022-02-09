import { combineReducers } from "redux";

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";
const UPDATE_USER = "UPDATE_USER";
const SUBMIT_UPDATE = "SUBMIT_UPDATE";

// ACTIONS
export const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};

export const removeUser = (id) => ({
  type: REMOVE_USER,
  id,
});

export const updateUser = (id) => ({
  type: UPDATE_USER,
  id,
});

export const submitUpdate = (user) => ({
  type: SUBMIT_UPDATE,
});

const defaultUser = [];

// REDUCER

const users = (state = defaultUser, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          firstName: action.user.firstName,
          lastName: action.user.lastName,
          age: action.user.age,
          id: action.user.id,
        },
      ];
    case "REMOVE_USER":
      return state.filter((user) => user.id !== action.id);

    case "UPDATE_USER":
      const userToUpdate = state.find((user) => {
        if (user.id === action.id) {
          return user;
        }
      });
      userToUpdate.firstName = action.firstName;
      userToUpdate.lastName = action.lastName;
      userToUpdate.age = action.age;
      return [...state];
    default:
      return state;
  }
};

const userApp = combineReducers({
  users,
});

export default userApp;
