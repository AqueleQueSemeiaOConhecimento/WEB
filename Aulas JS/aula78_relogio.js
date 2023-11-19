const data_div = document.querySelector("#data")
const relogio_div = document.querySelector("#relogio")


const data = new Date()

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
    
}

const intervalo = setInterval(relogio, 1000)


