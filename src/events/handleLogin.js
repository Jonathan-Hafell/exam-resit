import { loginUser } from "../api/auth/login.js";

export async function handleLogin(email, password) {
  try {
    loginUser(email, password);

    return true;
  } catch (error) {
    console.error("Error during login:", error.message);
    return false;
  }
}
