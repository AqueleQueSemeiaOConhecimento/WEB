function ativaLetra(element){
    const arrayText = element.innerHTML.split("")
    element.innerHTML = ""
    arrayText.forEach((letra, i) => {
        setTimeout(()=>{
            element.innerHTML += letra
        }, 75 * i)
    })
}

const titulo = document.querySelector(".digitando")
ativaLetra(titulo)