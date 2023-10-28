const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_transferir")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const element = evt.target
        element.classList.toggle("selecionado")         
    })
})

btn.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    const cursosNSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })  
})


