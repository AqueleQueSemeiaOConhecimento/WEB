const data_div = document.querySelector("#data")
const relogio_div = document.querySelector("#relogio")
const btn_ativar = document.querySelector("#btn_ativar")
const btn_parar = document.querySelector("#btn_parar")
const tmp_alarme = document.querySelector("#tmp_alarme")
const hora_alarme = document.querySelector("#hora_alarme")
const timer = document.querySelector("#timer")

const som_alarme = new Audio("paradise.mp3")
som_alarme.loop=1

let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false

btn_ativar.addEventListener("click", (evt)=> {
    ts_atual=Date.now()
    ts_alarme=ts_atual+(tmp_alarme.value*1000)
    alarme_ativado=true
    const dt_alarme=new Date(ts_alarme)
    hora_alarme.innerHTML="Hora do Alarme:"+dt_alarme.getHours()+":"+dt_alarme.getMinutes()+":"+dt_alarme.getSeconds()
})

btn_parar.addEventListener("click", (evt)=> {
    alarme_ativado=false
    alarme_tocando=false
    hora_alarme.innerHTML="Hora do Alarme:"
    tmp_alarme.value=0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime=0
})

let data = new Date()

let dia_m = data.getDate()<10?"0"+data.getDate():data.getDate()

let mes = data.getMonth()<10?"0"+data.getMonth():data.getMonth()
const data_r = dia_m+"/"+mes+"/"+data.getFullYear()

data_div.innerHTML = data_r

const relogio =()=>{
    const data = new Date()
    let hora = data.getHours()
    hora=hora<10?"0"+hora:hora

    let minuto = data.getMinutes()
    minuto=minuto<10?"0"+minuto:minuto

    let segundos = data.getSeconds()
    segundos=segundos<10?"0"+segundos:segundos

    const hora_completa = hora+":"+minuto+":"+segundos
    relogio_div.innerHTML=hora_completa
    
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando=true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio, 1000)


