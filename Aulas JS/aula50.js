const p_array = document.querySelector("#array") 
const btnReduzir = document.querySelector("#btnReduzir") 
const resultado = document.querySelector("#resultado")

const element_array = [1,2,3,4,5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML = "[" + element_array + "]"

btnReduzir.addEventListener("click", (evt) => {
    dobro.push(element_array[0]*2)

    resultado.innerHTML = element_array.reduce((anterior, atual, pos) => {
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)

        return anterior + atual
        
    })
    resultado.innerHTML+= "<br/> V.anterior: " + ant + "<br/> V.atual: " + atu + "<br/> Dobro: " + dobro
})

