const caixa1 = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evt1)=>{
    console.log("clicou dog?")
})

cursos.map((el) => {
    el.addEventListener("click", (evt1)=> {
        evt1.stopPropagation()
    })
})

cursos.map((el)=>{
    el.addEventListener("click", (evt2)=>{
        alert("Sexo?")
    })
})