const d = document;
export default function toggleSwitch() {
  const colorTheme = localStorage.getItem("theme-portfolio");

  document.addEventListener("click", (e) => {
    if (e.target.matches(".toggle-switch")) {
      d.body.classList.toggle("light");
      d.body.classList.toggle("dark");
      d.body.className === "dark"
        ? localStorage.setItem("theme-portfolio", "dark")
        : localStorage.setItem("theme-portfolio", "light");
    }
  });
  if (colorTheme === "dark") {
    d.body.classList.remove("light");
    d.body.classList.add("dark");
  } else {
    d.body.classList.remove("dark");
    d.body.classList.add("light");
  }
}
