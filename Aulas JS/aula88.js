const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click", (evt) => {
    alert("Olá, como você está?")
})


btn_confirm.addEventListener("click", (evt) => {
    const ret = confirm("Você esta feliz hoje?")

    if(ret){
        alert("Você está feliz hoje!")
    }
    else{
        alert("Você não está feliz hoje :(")
    }
})


btn_prompt.addEventListener("click", (evt) => {
    const promp = prompt("Qual seu anime favorito?", "Ex: Naruto")
    if(promp == null){
        console.log("Aparentemente você não gosta de anime :(")
    }
    else{
        console.log("Seu anime favorito é: ", promp)
    }
})
