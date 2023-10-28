const caixa = document.querySelector("#caixa")

let cursos = ["HTML", "CSS", "Javascript"]

cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})