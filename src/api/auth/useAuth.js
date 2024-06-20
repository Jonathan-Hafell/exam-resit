import { useContext } from "react";
import { AuthContext } from "./AuthContextTemp"; // Adjust the path if necessary

export const useAuth = () => useContext(AuthContext);
