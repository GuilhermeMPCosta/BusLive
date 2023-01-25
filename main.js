var vez=0
function abre(){
    let tresbarras=document.querySelector("#select")
    if (vez==0){
        tresbarras.classList.add("open")
        console.log(vez)
        vez=1
    }else{
        tresbarras.classList.remove("open")
        console.log(vez)
        vez=0
    } 
    
}