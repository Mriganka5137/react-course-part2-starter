import React, { ReactNode, useReducer } from "react";
import UserContext from "./userContext";

interface Props {
  children: ReactNode;
}

interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type UserAction = LoginAction | LogoutAction;

const loginReducer = (state: string, action: UserAction) => {
  if (action.type === "LOGIN") {
    return action.username;
  }
  if (action.type === "LOGOUT") return "";
  return state;
};

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
