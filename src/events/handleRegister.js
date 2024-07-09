import { registerUser } from "../api/auth/register.js";
import { save } from "../utils/save.js";

export async function handleRegister(username, email, password) {
  try {
    const userData = await registerUser(username, email, password);

    userData.user.password = password;

    save("user", userData);
    save("jwt", userData.jwt);
    return true;
  } catch (error) {
    console.error("Error during registration:", error);
  }
}
