const caixa1 = document.querySelector("#box");

const personagens = ["Guts", "Casca", "Grifth", "Bando do Falcão", "Mortos", "Vingança"];

 personagens.map((el, chave)=>{
 const criarElemento = document.createElement("div")
 criarElemento.setAttribute("id", "c"+chave)
 criarElemento.setAttribute("class","curso")
 criarElemento.innerHTML = el
 caixa1.appendChild(criarElemento)
 })

