const data_div = document.querySelector("#data")
const data = new Date()

let dia_m = data.getDate()<10?"0"+data.getDate():data.getDate()

let mes = data.getMonth()<10?"0"+data.getMonth():data.getMonth()
const data_r = dia_m+"/"+mes+"/"+data.getFullYear()

data_div.innerHTML = data_r

// getDate() = Dia do mês
// getDay() = Dia da Semana (número)
// getFullYear() = Ano com 4 digitos
// getHours() = horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth = Mês
// getSeconds() = Segundos
// getTIme() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define minutos
// setSeconds() = Define segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somente a data