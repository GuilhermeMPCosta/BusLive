var vez=0
function abre(){
    let tresbarras=document.querySelector("#select")
    let tresbarrasvirado=document.querySelector(".tresbarras")
    if (vez==0){
        tresbarras.classList.add("open")
        tresbarrasvirado.classList.add("tresbarrasvirado")
        console.log(vez)
        vez=1
    }else{
        tresbarras.classList.remove("open")
        tresbarrasvirado.classList.remove("tresbarrasvirado")
        console.log(vez)
        vez=0
    } 
    
}