let password = ["admin"];
let username = ["admin"];

function validate() {
  const pass = document.getElementById("password").value;
  const user = document.getElementById("username").value;
  let response = document.getElementById("response");

  for (let i = 0; i < username.length; i++) {
    if (password[i] == pass && username[i] == user) {
      //redirect
      window.location.replace("./index.html");
      return;
    }
  }

  console.log(response);
  response.innerHTML = "enter valid user and password";
}

function signup() {
  const pass = document.getElementById("password").value;
  const user = document.getElementById("username").value;
  let response = document.getElementById("response");

  if (user === "") {
    response.innerHTML = "username should not be  empty!";
    return;
  }

  if (user.length <= 1) {
    response.innerHTML = "username should not be  empty!";
    return;
  }

  for (let i = 0; i < username.length; i++) {
    if (username[i] == user) {
      //redirect
      response.innerHTML = "username already exists!";
      return;
    }
  }

  username.push(user);
  password.push(pass);

  response.innerHTML = "username sign up compelete!";
}
