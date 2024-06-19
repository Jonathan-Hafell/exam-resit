export function loginUser(email, password) {
  const storedData = JSON.parse(localStorage.getItem("user"));

  console.log("Stored user data:", storedData);
  console.log("Input email:", email);
  console.log("Input password:", password);

  if (!storedData) {
    throw new Error("No user data found in localStorage");
  }

  if (storedData.user.email !== email) {
    throw new Error(
      `Email does not match: expected ${storedData.user.email}, got ${email}`
    );
  }

  if (storedData.user.password !== password) {
    throw new Error("Password does not match");
  }

  return storedData.user;
}
