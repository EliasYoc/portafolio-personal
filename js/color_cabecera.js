const d = document,
  w = window;
// ... 259 493bs
export default function changeHeaderColor() {
  const $header = d.getElementById("header");
  let colorBgHeader;

  const changeResponsiveHeaderColor = (pageYOffsetChanged) => {
    colorBgHeader = pageYOffsetChanged ? "var(--bg-header)" : "transparent";
    $header.style.backgroundColor = colorBgHeader;
  };
  changeResponsiveHeaderColor(w.pageYOffset > 30);
  w.addEventListener("scroll", (e) => {
    // console.log(w.pageYOffset);
    if (w.matchMedia("(min-width: 930px)").matches) {
      changeResponsiveHeaderColor(w.pageYOffset > 573);
    }
    if (w.matchMedia("(max-width:930px)").matches) {
      changeResponsiveHeaderColor(w.pageYOffset > 30);
    }
  });
}
