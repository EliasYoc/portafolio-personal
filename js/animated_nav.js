const d = document;
export default function animatedNav() {
  const $navLine = d.querySelector(".line");
  $navLine.style.width = "67px";
  // d.addEventListener("click", (e) => {
  //   if (e.target.matches("a.toggle")) {
  //     console.warn(e.target.offsetWidth);
  //     $navLine.style.left = `${e.target.offsetLeft}px`;
  //     $navLine.style.width = `${e.target.offsetWidth}px`;
  //   }
  // });
  const $links = d.querySelectorAll("a.toggle"),
    $btnHome = $links[0],
    $btnAbout = $links[1],
    $btnSkills = $links[2],
    $btnProjects = $links[3],
    $btnContact = $links[4];
  console.log($btnHome);
  const $sections = d.querySelectorAll(".sec-scroll"),
    $sectionHomeTop = $sections[0].offsetTop,
    $sectionAboutTop = $sections[1].offsetTop,
    $sectionSkillsTop = $sections[2].offsetTop,
    $sectionProjectsTop = $sections[3].offsetTop,
    $sectionContactTop = $sections[4].offsetTop;
  console.log($sectionContactTop);

  window.addEventListener("scroll", (e) => {
    const htmlTop = d.documentElement.scrollTop;
    // console.log(htmlTop);
    if ($sectionHomeTop <= htmlTop) {
      $navLine.style.left = `${$btnHome.offsetLeft}px`;
      $navLine.style.width = `${$btnHome.offsetWidth}px`;
      // console.warn("se cumple home");
    }
    if ($sectionAboutTop <= htmlTop) {
      $navLine.style.left = `${$btnAbout.offsetLeft}px`;
      $navLine.style.width = `${$btnAbout.offsetWidth}px`;

      // console.warn("se cumple about");
    }
    if ($sectionSkillsTop - 80 <= htmlTop) {
      $navLine.style.left = `${$btnSkills.offsetLeft}px`;
      $navLine.style.width = `${$btnSkills.offsetWidth}px`;
    }
    if ($sectionProjectsTop - 80 <= htmlTop) {
      $navLine.style.left = `${$btnProjects.offsetLeft}px`;
      $navLine.style.width = `${$btnProjects.offsetWidth}px`;
    }
    if ($sectionContactTop - 250 <= htmlTop) {
      $navLine.style.left = `${$btnContact.offsetLeft}px`;
      $navLine.style.width = `${$btnContact.offsetWidth}px`;
    }
  });
}
