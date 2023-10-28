const cursosTotal = [...document.querySelectorAll(".teste")]

const sexo = document.querySelector(".teste")

    cursosTotal.map((e, i)=>{
      if(i === 0 || i === 4){
         e.classList.add("default")
      }
    })

// const msg=()=>{
//     alert("clicou")
// }

// sexo.addEventListener("click", msg)


// sexo.addEventListener("click", (evt)=> {
//     const el=evt.target
//     el.classList.add("outros")
// })

const agrVai = [...document.querySelectorAll(".teste")]

agrVai.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const el = evt.target
        el.classList.add("outros")
    })
})