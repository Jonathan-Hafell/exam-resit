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

    console.log("Response Status:", response.status);

    const data = await response.json();

    // Log the response status and data for debugging
    console.log("Response Status:", response.status);
    console.log("Response Data:", data);

    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}
