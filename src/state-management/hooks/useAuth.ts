import { useContext } from "react";
import UserContext from "../context/userContext";

const useAuth = () => useContext(UserContext);

export default useAuth;
