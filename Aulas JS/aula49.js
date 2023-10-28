const p_array = document.querySelector("#array") 
const btnVerificar = document.querySelector("#btnVerificar") 
const resultado = document.querySelector("#resultado")

const element_array = [10, 20, 34, 44, 11, 5, 9, 101, 21]
p_array.innerHTML = "[" + element_array + "]"

btnVerificar.addEventListener("click", (evt) => {
    const ret = element_array.some((e, i)=>{
        if( e < 18){
            resultado.innerHTML = "Array não conforme a condição especificada" 
        }
        return e >= 18
    })
    if(ret){
        resultado.innerHTML = "OK"
    }

})

