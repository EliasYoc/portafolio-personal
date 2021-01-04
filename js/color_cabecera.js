const d = document,
w = window;

export default function changeHeaderColor(){
    const $header = d.getElementById("header");
    w.addEventListener("scroll",(e)=>{
        // console.log(w.pageYOffset)
        if(w.matchMedia("(min-width: 930px)").matches){
            (w.pageYOffset > 620) ? $header.style.backgroundColor = "var(--bg-second-light-mode)" : $header.style.backgroundColor = "transparent"
        }

        if(w.matchMedia("(max-width:930px)").matches){
            (w.pageYOffset > 30) ? $header.style.backgroundColor = "var(--bg-second-light-mode)" : $header.style.backgroundColor = "transparent"
        }
    })
}