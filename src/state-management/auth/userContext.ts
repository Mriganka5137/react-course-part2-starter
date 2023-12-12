import { Dispatch, createContext } from "react";
import { UserAction } from "./AuthProvider";

interface UserContextType {
  user: string;
  dispatch: Dispatch<UserAction>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export default UserContext;
