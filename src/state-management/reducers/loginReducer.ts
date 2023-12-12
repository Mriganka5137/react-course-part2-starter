interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type UserAction = LoginAction | LogoutAction;

export const loginReducer = (state: string, action: UserAction) => {
  if (action.type === "LOGIN") {
    return action.username;
  }
  if (action.type === "LOGOUT") return "";
  return state;
};
