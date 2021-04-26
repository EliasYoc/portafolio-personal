import activarBtn from "./boton_active.js";
import changeHeaderColor from "./color_cabecera.js";
import toggleSwitch from "./dark-mode-switch.js";
import scrollTop from "./scroll_arriba.js";

document.addEventListener("DOMContentLoaded", () => {
  activarBtn("btn-dev", "blur-panel", "btn-bars", "nav");
  changeHeaderColor();
  scrollTop();
  toggleSwitch();
});
