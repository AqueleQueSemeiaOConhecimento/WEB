const pessoa={
    nome:"",
    idade:"",
    getNome:function(){
        return this.nome
    },

    getIdade:function(){
        return this.idade
    },

    setNome:function(nome){
        this.nome=nome
    },

    setIdade:function(idade){
        this.idade=idade
    }
}

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

let nom = ""
let idad = ""

const pes= () =>{
        res.innerHTML =""    
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${nom} <br/> Idade: ${idad}`
        res.appendChild(div)
}

btn_add.addEventListener("click", (evt) => {
    const pnome = document.querySelector("#f_nome")
    const pidade = document.querySelector("#f_idade")
    nom = pnome.value
    idad = pidade.value

    pes()
})