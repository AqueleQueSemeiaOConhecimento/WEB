function* pergunta(){
    const name=yield "Qual seu nome:"
    const esport=yield "Qual seu esporte favorito?"
    return "Seu nome é " + name + " e seu esporte favorito é " + esport
}

const itp = pergunta()

console.log(itp.next().value)
console.log(itp.next("Matheus").value)
console.log(itp.next("Sei la").value)

