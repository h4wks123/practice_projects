function changeTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.value);
  checkTheme();
}

function checkTheme() {
  if (localStorage.theme === "light") {
    document.body.classList = "light";
    document.getElementById("navigation-bar-right__button-mode").src =
      "./assets/dark-mode.svg";
    document.getElementById("navigation-bar-right__text").innerHTML =
      "Dark Mode";
    document.getElementById("back__icon").src = "./assets/back-dark-mode.svg";
  } else {
    document.body.classList = "";
    document.getElementById("navigation-bar-right__button-mode").src =
      "./assets/light-mode.svg";
    document.getElementById("navigation-bar-right__text").innerHTML =
      "Light Mode";
    document.getElementById("back__icon").src = "./assets/back-light-mode.svg";
  }
}

function navigateHomePage() {
  location.href = "index.html";
}

checkTheme();
