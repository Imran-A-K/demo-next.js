export function registerUser(newUser) {
  const usersData = JSON.parse(localStorage.getItem("users")) || [];
  const usersArray = Array.isArray(usersData) ? usersData : [];

  // Check if the 'email' field of 'newUser' already exists in the 'usersArray'
  const userExists = usersArray.find((user) => user.email === newUser.email);

  if (userExists) {
    return "User already exists";
  } else {
    // Remove 'confirm_password' key from 'newUser' if present
    if ("confirm_password" in newUser) {
      delete newUser.confirm_password;
    }

    // Add 'newUser' to 'usersArray'
    usersArray.push(newUser);
    const currentUser = { ...newUser };
    localStorage.setItem("users", JSON.stringify(usersArray));
    localStorage.setItem("loggedUser", JSON.stringify(currentUser));
    return "User created successfully";
  }
}
export function verifyUser(credentials) {
  if (!localStorage.hasOwnProperty("users")) {
    return "User not found. Please check credentials.";
  }

  const usersArray = JSON.parse(localStorage.getItem("users"));

  if (!Array.isArray(usersArray)) {
    return "User not found. Please check credentials.";
  }

  const foundUser = usersArray.find((user) => user.email === credentials.email);

  if (!foundUser) {
    return "User not found. Please check credentials.";
  }

  if (foundUser.password === credentials.password) {
    const currentUser = { ...foundUser };
    localStorage.setItem("loggedUser", JSON.stringify(currentUser));
    return "User Verified";
  } else {
    return "Password does not match.";
  }
}
