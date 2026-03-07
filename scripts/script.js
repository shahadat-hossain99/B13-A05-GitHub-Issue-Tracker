console.log("My Name Is Shahadat Hossain");

//! This Js file only used in Signing In Page

document.getElementById("signInBtn").addEventListener("click", function () {
  console.log("Button clicked");

  //!   input-user

  const userInput = document.getElementById("input-user");
  const user = userInput.value;
  console.log(user);

  //!   input-password

  const inputPassword = document.getElementById("input-password");
  const password = inputPassword.value;
  console.log(password);

  //!   Condition

  if (user === "admin" && password === "admin123") {
    alert("Successfully Signed In");
    window.location.assign("./HomePage.html");
  } else {
    alert("Signing In Failed");
    return;
  }
});
