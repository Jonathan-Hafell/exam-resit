import { loginUser } from "../api/auth/login.js";

export async function handleLogin(email, password) {
  try {
    const user = loginUser(email, password);
    console.log("User logged in successfully:", user);

    return true;
  } catch (error) {
    console.error("Error during login:", error.message);
    return false;
  }
}
