const caixa1 = document.querySelector("#box");

const nomes = ["Guts", "Casca", "Grifth", "Bando do Falcão", "Mortos", "Vingança"];

 nomes.map((el, chave)=>{
 const criarElemento = document.createElement("div")
 criarElemento.setAttribute("id", "c"+chave)
 criarElemento.setAttribute("class","curso")
 criarElemento.innerHTML = el



     const btn_function = document.createElement("img")
     btn_function.setAttribute("src","./lixeira.png")
     btn_function.setAttribute("class", "btn_lixeira")

     btn_function.addEventListener("click", (evt)=>{
     caixa1.removeChild(evt.target.parentNode)
 })


  criarElemento.appendChild(btn_function)
  caixa1.appendChild(criarElemento)
  })

