const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");

const cursos = [...document.querySelectorAll(".curso")]

//console.log(caixa1.childNodes)
// Pega todos os elementos, como div, class, id.

//console.log(caixa1.firstChild)
// Pega o primeiro valor, no caso um arquivo text.

//console.log(caixa1.firstElementChild)
// Pega o primeiro elemento, no caso uma div

//console.log(caixa1.children)
// Pega o total de parentes.

//console.log(document.getRootNode())
// Pega a raiz do programa, no caso o document.

//console.log(caixa1.hasChildNodes())
// Retorna true se o elemento tiver pelo menos 1 filho, mas isso inclui text então é ruim.

//console.log(caixa1.children.lengeth > 0 ? "Possui filhos" : "Não possui filhos")
// Serve para dizer se o elemento possui filhos ou não.

console.log(caixa1.children[1].innerHTML = "TESTE")
