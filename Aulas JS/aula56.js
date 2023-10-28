const caixa = document.querySelector("#caixa")

//const curso = "Javascript"
//const canal = "CFB Cursos"

//const frase = `Este é o curso <br/> de ${curso} do canal ${canal}`

//caixa.innerHTML=frase

const carros = ["Polo", "Golf", "T-Cross", "HRV"]

let ul = `<ul>`

carros.map((el) => {
    ul+= `<li> ${el} </li>`
})

ul+ `<ul/>`

caixa.innerHTML = ul