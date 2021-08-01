const d = document;
// creo que aqui puedo usar mejor insersection observer 🤔
export default function animatedNav() {
  const $navLine = d.querySelector(".line");
  $navLine.style.width = "67px";

  const $links = d.querySelectorAll("a.toggle");
  const [$btnHome, $btnAbout, $btnSkills, $btnProjects, $btnContact] = $links;
  // console.log($btnHome);
  const $sections = d.querySelectorAll(".sec-scroll"),
    $sectionHomeTop = $sections[0].offsetTop,
    $sectionAboutTop = $sections[1].offsetTop,
    $sectionSkillsTop = $sections[2].offsetTop,
    $sectionProjectsTop = $sections[3].offsetTop,
    $sectionContactTop = $sections[4].offsetTop;
  // console.log($sectionContactTop);

  const switchNavLineTo = (btnSelected) => {
    $navLine.style.left = `${btnSelected.offsetLeft}px`;
    $navLine.style.width = `${btnSelected.offsetWidth}px`;
  };
  window.addEventListener("scroll", (e) => {
    const htmlTop = d.documentElement.scrollTop;
    // console.log(htmlTop);
    if ($sectionHomeTop <= htmlTop) {
      switchNavLineTo($btnHome);
    }
    if ($sectionAboutTop - 150 <= htmlTop) {
      switchNavLineTo($btnAbout);
    }
    if ($sectionSkillsTop - 150 <= htmlTop) {
      switchNavLineTo($btnSkills);
    }
    if ($sectionProjectsTop - 150 <= htmlTop) {
      switchNavLineTo($btnProjects);
    }
    if ($sectionContactTop - 250 <= htmlTop) {
      switchNavLineTo($btnContact);
    }
  });
}
