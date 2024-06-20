import { useContext } from "react";
import { AuthContext } from "./AuthContext"; // Adjust the path if necessary

export const useAuth = () => useContext(AuthContext);
