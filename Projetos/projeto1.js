const caixa = document.querySelector("#box")

const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const img4 = document.querySelector("#img4")


img1.addEventListener("click", (evt) =>{
    caixa.removeChild(evt.target)
})

img2.addEventListener("click", (evt) =>{
    caixa.removeChild(evt.target)
})

img3.addEventListener("click", (evt) =>{
    caixa.removeChild(evt.target)
})

img4.addEventListener("click", (evt) =>{
    caixa.removeChild(evt.target)
})