let url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click", (evt) => {
    //window.location.replace("https://neoxscan.net/") Deleta a URL corrente do historico
    //window.location.assign("https://neoxscan.net/") Não Deleta a URL corrente do historico
    //window.location.reload() Recarrega a pagina

    //window.history.back() volta em 1 pagina
    //window.history.forward() adianta em 1 pagina
    //window.history.go(3) navega no historico, podendo ir pra frente ou para tras

    window.location = url.value
})