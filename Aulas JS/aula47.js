const p_array = document.querySelector("#array") 
const txt_pesquisar = document.querySelector("#txt_pesquisar")  
const btnPesquisar = document.querySelector("#btnPesquisar") 
const resultado = document.querySelector("#resultado")  

const element_array = [10, 20, 34, 44, 11, 5, 9, 101, 21]

p_array.innerHTML = "[" + element_array + "]"

btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Valor não encontrado"

    element_array.find((e, i) => {
        if(e == txt_pesquisar.value){{
            resultado.innerHTML = "Valor encontrado: " + e + " no indice: " + i;
        }}
    })
})