class pessoa{
    constructor(pnome){
        this.nome = pnome
    }
}

let p1 = new pessoa("Matheus")
let p2 = new pessoa(10)

console.log(p1.nome)
console.log(p2.nome)