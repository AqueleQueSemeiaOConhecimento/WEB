class carro{
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar=function(){
        this.ligado = true
    }
    desligar=function(){
        this.ligado = false
    }
    setCor=function(cor){
        this.cor = cor
    }
}

class Militar extends carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)

        this.blindagem = blindagem
        this.municao = municao
    }

    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const c1 = new carro("Gol", 4)
c1.setCor("Azul")
c1.ligar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log(`Ligado: ${c1.ligado? "Sim" : "Não"}`)
console.log("------------------------------")

const c2 = new Militar("Poderoso", 2, 100, 30)

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)

c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Munição: ${c2.municao}`)