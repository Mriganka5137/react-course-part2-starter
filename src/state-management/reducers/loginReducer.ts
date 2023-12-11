interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

type Action = LoginAction | LogoutAction;

export const loginReducer = (state: string, action: Action) => {
  if (action.type === "LOGIN") {
    return action.username;
  }
  if (action.type === "LOGOUT") return "";
  return state;
};
