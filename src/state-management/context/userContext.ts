import { Dispatch, createContext } from "react";
import { UserAction } from "../reducers/loginReducer";

interface UserContextType {
  user: string;
  dispatch: Dispatch<UserAction>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export default UserContext;
