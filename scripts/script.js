const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "assets/Visible.png";
  } else {
    password.type = "password";
    eyeicon.src = "assets/notVisible.png";
  }
};
