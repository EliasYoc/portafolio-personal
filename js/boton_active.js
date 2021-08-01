const d = document;

export default function activarBtn(btnUsuario, blurPanel, btnHamburguer, nav) {
  d.addEventListener("click", (e) => {
    const $nav = d.getElementById(nav);
    if (e.target.matches(`#${btnHamburguer}`) || e.target.matches(".toggle")) {
      $nav.classList.toggle("active");
    }
  });

  // const $imagenes = d.querySelectorAll(".container-portada>img");
  // let i = 0;
  // setInterval(() => {
  //     $imagenes[i].classList.remove("active");
  //     i++;
  //     if (i >= $imagenes.length) {
  //         i = 0;
  //     }
  //     $imagenes[i].classList.add("active");
  // }, 12000)
}
