const d = document;

export default function activarBtn(btnUsuario, blurPanel, btnHamburguer,nav) {
    d.addEventListener("click", (e) => {
        //console.log(`#${btnUsuario}`)
        //console.log(e.target)
        //console.log(e.target.matches(`#${btnUsuario}`)||e.target.matches(`#${btnUsuario} *`)); //valida si el selector del boton es igual al del target(etiqueta o si tambien da clic dentro de los hijos del elemento(target))
        if (e.target.matches(`#${btnUsuario}`) || e.target.matches(`#${btnUsuario} *`)) {
            d.getElementById(btnUsuario).classList.toggle("active");
            d.getElementById(blurPanel).classList.toggle("active");
        }
        const $nav = d.getElementById(nav);
        if(e.target.matches(`#${btnHamburguer}`) || e.target.matches(".toggle")){
            $nav.classList.toggle("active");
        }
    })
    
    const $imagenes = d.querySelectorAll(".container-portada>img");
    // console.log($imagenes.length)
    // console.log($imagenes[3])
    let i = 0;
    setInterval(() => {
        $imagenes[i].classList.remove("active");
        i++;
        if (i >= $imagenes.length) {
            i = 0;
        }
        $imagenes[i].classList.add("active");
    }, 12000)
}