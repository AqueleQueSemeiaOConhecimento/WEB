const macaco = [...document.getElementsByClassName("class1")]
const gorila = [...document.getElementsByClassName("class2")]

//console.log(macaco)
//console.log(gorila)

macaco.map((e, i)=>{
    if( i === 0){
        e.classList.add("default")
    }
})


gorila.map((e, i)=>{
    if( i === 0){
        e.classList.add("default")
    }
})