const d = document,
w = window;

export default function scrollTop(){
    const $nav = document.getElementById("nav");
    d.addEventListener("click",(e)=>{
        // console.log(e.target)
        if(e.target.matches("#btn-top") || e.target.matches("#btn-top *")){
            w.scrollTo(0,0);
            $nav.classList.remove("active");
        }
    })
}