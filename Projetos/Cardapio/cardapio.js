var btn = document.getElementById("confirmar")
var valor = 0;
var p_value = document.getElementById("resultado") 

btn.addEventListener("click", (evt) => {
    var checkbox = document.querySelectorAll("input[type=checkbox]")

    checkbox.forEach(checkbox_Atual => {
        if(checkbox_Atual.checked == true){
            var converterValor = Number(checkbox_Atual.value)
            valor+= converterValor
            converterValor = 0;
        }
        console.log(valor)
    })

    if( valor > 0){
        p_value.innerHTML = "R$ "+ valor
    }
    

    valor = 0;

})


