//function to set the theme of our website

function setTheme() {
  if (
    // if theme is equal to light
    localStorage.getItem("theme") === "light" ||
    localStorage.getItem("theme") === "null"
  ) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
    //from css , add class. add method of clss -dark.
    // or set attribute - class, set class - dark
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
}

// getting the theme
const themeButton = document.getElementById("theme-btn");
themeBtn.addEventListener("click", setTheme);

function getTheme() {
  if (localStorage.getItem("theme") === "dark");
  {
    document.body.classList.add("dark");
  }
}

getTheme();
