
let hora = 0;
let minuto = 0;
let segundo = 0;
const exibir = document.querySelector("#cronometro")


var cron;

//Iniciar o cronometro
function start(){
    cron = setInterval(()=>{ timer()}, 1000)
}

//Parar o cronometro e não limpa as variaveis
function pause(){
    clearInterval(cron);
}

//Para o cronometro e limpa as variaveis
function stop(){
    clearInterval(cron);
    hora=0;
    minuto=0;
    segundo=0;

    exibir.innerHTML="00:00:00";
}

//Faz a contagem do tempo e exibição
function timer(){
    segundo++;
    if(segundo == 60){
        segundo=0
        minuto++
            if(minuto ==60){
            minuto=0
            hora++
            }
    }
    
    let tempo = (hora < 10 ? "0"+hora:hora)+":"+(minuto < 10? "0"+minuto:minuto)+":"+(segundo <10 ?"0"+segundo:segundo)

    exibir.innerHTML=tempo


}



