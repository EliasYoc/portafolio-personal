export default function toggleSwitch() {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".toggle-switch")) {
      document.body.classList.toggle("light");
      document.body.classList.toggle("dark");
    }
  });
}
