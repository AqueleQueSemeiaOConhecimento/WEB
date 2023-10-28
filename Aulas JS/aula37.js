const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");

const cursos = [...document.querySelectorAll(".curso")]

//  caixa1.addEventListener("click", () => { alert("sexo")})

// caixa1.addEventListener("click", ()=>
// {
//     console.log("Chupo Cavalos")
// })

caixa1.addEventListener("click", (evt) => { console.log("carnes")})

cursos.map((el, i) => {
    el.addEventListener("click", (evt) =>{
        evt.stopPropagation()
    })
})

cursos.map((el)=> {
    el.addEventListener("click", (evt2)=> {
        console.log("Drogas")
    })
})

