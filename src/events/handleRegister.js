import { registerUser } from "../api/auth/register.js";
import { save } from "../utils/save.js";

export async function handleRegister(username, email, password) {
  try {
    const userData = await registerUser(username, email, password);
    console.log("User registered successfully:", userData);

    userData.user.password = password;

    // Store user data in localStorage
    save("user", userData);
  } catch (error) {
    console.error("Error during registration:", error);
  }
}
