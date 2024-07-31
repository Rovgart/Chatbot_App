import React, { ReactNode, useLayoutEffect, useReducer } from "react";
import { update } from "react-spring";
import { createContext } from "vm";
import { getUserImage } from "../actions";

type UserState = {
  userId: number;
  userImage: string;
  username: string;
  recentPrompts: [];
  hasToken: boolean;
};
enum UserActionType {
  GET_DATA = "GET_DATA",
}
type UserAction = {
  type: string;
  payload: {
    userId: number;
    userImage: string;
  };
};

const UserDataContext = createContext(undefined);
function UserDataProvider({ children }: { children: ReactNode }) {
  const getImage = async (user_id: number) => {
    await getUserImage(user_id);
  };
  const getUserData = async (user_id: number) => {
    await getUserData(user_id);
  };
  function reducer(state: UserState, action: UserAction) {
    const { type, payload } = action;
    if (type === "GET_DATA") {
      const updatedUser = {
        userId: payload.userId,
        userImage: payload.userImage,
        username: state.username,
        recentPrompts: state.recentPrompts,
      };
      return updatedUser;
    }
  }
  const INIT_USER_STATE = {
    userId: null,
    userImage: null,
    username: null,
    recentPrompts: [],
    hasToken: false,
  };
  const [state, dispatch] = useReducer(reducer, INIT_USER_STATE);
  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataProvider;
