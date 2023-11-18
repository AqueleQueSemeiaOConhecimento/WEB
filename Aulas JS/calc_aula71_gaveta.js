const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const teclaOn = document.querySelector("#ton")
const teclaLimpar = document.querySelector("#tlimpar")
const tigual = document.querySelector("#tigual")
const calc_aba = document.querySelector("#calc_aba")
const calc = document.querySelector("#calc")
const img_aba = document.querySelector("#img_aba")

let sinal = false
let decimal = false

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal = true
                    if(display.innerHTML=="0"){
                        display.innerHTML = "0,"
                    }
                    else{
                        display.innerHTML+=evt.target.innerHTML
                    }
                }
        }
        else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if(!sinal){
            sinal = true

            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }
            else{
                display.innerHTML+=evt.target.innerHTML
            }
            decimal = false
            
        }
    })
})

teclaLimpar.addEventListener("click", (evt) => {
    sinal = false
    decimal=false
    display.innerHTML="0"
})

tigual.addEventListener("click", (evt) => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

calc_aba.addEventListener("click", (evt) => {
    calc.classList.toggle("calc_exibir")

    if(calc.classList.contains("calc_exibir")){
        img_aba.setAttribute("src","arrow_left.svg")
    }
    else{
        img_aba.setAttribute("src","arrow_right.svg")
    }
})
