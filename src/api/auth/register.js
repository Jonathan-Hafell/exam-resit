export async function registerUser(username, email, password) {
  try {
    const response = await fetch(
      "https://celebrated-art-c3e8097696.strapiapp.com/api/auth/local/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}
