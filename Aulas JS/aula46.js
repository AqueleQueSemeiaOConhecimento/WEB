const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")
let indice = 0

const stopSelecionado = () => {
    const cursoSelecionado = [...document.querySelectorAll(".curso")]
    cursoSelecionado.map((el) =>{
        el.classList.remove("selecionado")
    })
}

const criarCurso = (curso)=>{

    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click", (evt) => {
        stopSelecionado()
        evt.target.classList.toggle("selecionado")
    })
    caixaCursos.appendChild(novoElemento)
    indice++
    return novoElemento
}

cursos.map((el)=>{
    criarCurso(el)
})

 const cursoSelecionado = () =>{
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
     
     return cursoSelecionado[0]
 }

btnCursoSelecionado.addEventListener("click", (evt) =>{
    const cs = cursoSelecionado()

    if(cs != undefined)
    {
    alert("Curso Selecionado: "+ cs.innerHTML )
    }
    else{
        alert("Selecione um curso")
    }
})

btnRemoverCurso.addEventListener("click", (evt) => {
    const cs = cursoSelecionado()

    
    if(cs != undefined)
    {
    cs.remove()
    alert("Item removido")
    }
    else{
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
    const cs = cursoSelecionado()

    if(nomeCurso.value != ""){
    const novoCurso = criarCurso(nomeCurso.value)   
    caixaCursos.insertBefore(novoCurso, cs)
    }
    else{
        alert("Selecione um Curso ou um valor aceitavel")
    }
    
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    const cs = cursoSelecionado()
    if(nomeCurso.value != ""){
    const novoCurso = criarCurso(nomeCurso.value)
    caixaCursos.insertBefore(novoCurso, cs.nextSibling)
    }
    else{
        alert("Selecione um Curso ou um valor aceitavel")
    }
    
})