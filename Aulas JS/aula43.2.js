const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnAdicionarCurso = document.getElementById("btnAdicionarNovoCurso")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")

    cursos.map((el, chave)=>{
        const novoElemento = document.createElement("div")
        novoElemento.setAttribute("id", "c"+chave)
        novoElemento.setAttribute("class", "curso c1")
        novoElemento.innerHTML = el

        const comandos = document.createElement("div")
        comandos.setAttribute("class", "comandos")

        const rb = document.createElement("input")
        rb.setAttribute("type", "radio")
        rb.setAttribute("name", "rb_curso")

        comandos.appendChild(rb)

        novoElemento.appendChild(comandos)

        caixaCursos.appendChild(novoElemento)
    })

    const radioSelecionado = ()=>{
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
            alert("Selecione um Curso")
        }
    })


    btnRemoverCurso.addEventListener("click", (evt)=>{
        const rs = radioSelecionado()

        if(rs != undefined)
        {
            const cursoSelecionado = rs.parentNode.parentNode
            cursoSelecionado.remove()
            alert("Voce removeu o elemento")
        }
        else{
            alert("Selecione um Curso")
        }
    })

    btnAdicionarCurso.addEventListener("click", (evt) => {
    

        const name = document.querySelector("#nomeCurso")

        const value = name.value

        if(value != ""){

        const deus = function(i){
            const bloco = document.createElement("div")
            bloco.setAttribute("class", "curso c1")
            bloco.innerHTML = i

            const comandos = document.createElement("div")
            comandos.setAttribute("class", "comandos")

            const radio = document.createElement("input")
            radio.setAttribute("type", "radio")
            radio.setAttribute("name", "rb_curso")


            caixaCursos.appendChild(bloco)
            bloco.appendChild(comandos)
            comandos.appendChild(radio)
        }

        deus(value)
        }
        else{
            alert("Adicione um curso")
        }
    })
   
