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

const criarCurso = (curso)=>{

    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
    return novoElemento
}

cursos.map((el)=>{
    criarCurso(el)
    indice++
})

const radioSelecionado = () =>{
    const todosRadios = [...document.querySelectorAll("input[type=radio")]

    const radioSelecionado = todosRadios.filter((el) =>{
        return el.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt) =>{
    const rs = radioSelecionado()

    if(rs != undefined)
    {
    const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent

    alert("Curso Selecionado: "+ cursoSelecionado )
    }
    else{
        alert("Selecione um curso")
    }
})

btnRemoverCurso.addEventListener("click", (evt) => {
    const rs = radioSelecionado()

    
    if(rs != undefined)
    {
    const cursoSelecionado = rs.parentNode.parentNode
    cursoSelecionado.remove()
    alert("Item removido")
    }
    else{
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
    const rs = radioSelecionado()

    if(nomeCurso.value != ""){
    const cursoSelecionado = rs.parentNode.parentNode
    const novoCurso = criarCurso(nomeCurso.value)   
    caixaCursos.insertBefore(novoCurso, cursoSelecionado)
    }
    else{
        alert("Selecione um Curso ou um valor aceitavel")
    }
    
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    if(nomeCurso.value != ""){
    const cursoSelecionado = rs.parentNode.parentNode
    const novoCurso = criarCurso(nomeCurso.value)
    caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
    }
    else{
        alert("Selecione um Curso ou um valor aceitavel")
    }
    
})