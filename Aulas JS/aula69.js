//Class CarroPadrao é uma class em Javascript feita com intuito de
//ser uma class raiz, class ABSTRACT, nela usei o um if para tornala em abstract, tal conseito
//não existe em JS.
class CarroPadrao{
    constructor(){
        if(this.constructor === CarroPadrao){
            throw new TypeError("Esta classe não pode ser instânciada")
        }
        if(this.ligar === undefined){
            throw new TypeError("É obrigatorio implementar o metodo ligar")
        }
        if(this.desligar === undefined){
            throw new TypeError("É obrigatorio implementar o metodo desligar")
        }
        this.rodas=4
        this.portas=4
        this.ligado=false
        
    }
}

//Class Carro recebe extensão de CarroPadrao e nela temos o this.turbo que recebe função de
//new Turbo e o parametro dele é estagioTurbo

class Carro extends CarroPadrao{
    constructor(tipo, estagioTurbo){
        super()
        this.turbo= new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax=120
            this.nome="normal"
        }
        else if(tipo==2){
            this.velMax=160
            this.nome="esportivo"
        }
        else if(tipo==3){
            this.velMax=200
            this.nome="super esportivo"
        }
        this.velMax+=this.turbo.pot
    }

    //Chamada do console.log da função
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo.pot)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
        console.log("------------------")
    }
    ligar(){
        this.ligar = true
    }
    desligar(){
        this.desligar = false
    }
}

//Class Turbo é a class que a gente coloca o turbo na class acima, com o parametro estagioTurbo.
class Turbo{
    constructor(e){
        if(e==0){
            this.pot=0
        }
        else if(e==1){
            this.pot=50
        }
        else if(e==2){
            this.pot=75
        }
        else if(e==3){
            this.pot=100
        }
    }
}

//Class CarroEspecial recebe extensão de Carro onde no constructor chama estagioTurbo
//super recebe parametro ficso 4, que é o do tipo do carro, e herda o estagioTurbo

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        //this.tipoInfo tem haver com o info de baixo
        this.tipoInfo=0
        this.velMax=300 + this.turbo.pot
        this.nome="Carro Especial"
    }
    info(){
        //Se this.tipoInfo==1 ele chama o super.info() que vem da class Carro
        if(this.tipoInfo==1){
            super.info()
        }
        else{
            //else .
            console.log(`Nome...:${this.nome}`)
            console.log(`Vel.Max:${this.velMax}`)
            console.log(`Turbo...:${this.turbo.pot}`)
            console.log("------------------")
        }
    }
}

let c1 = new Carro(2, 2)

let c2 = new CarroEspecial(3)


c1.info()
c2.info()