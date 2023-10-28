class carro{
    constructor(pnome, ptipo){
        this.nome = pnome
        if(ptipo == 1){
            this.tipo = "Esportivo"
            this.velMax = 300
        }

        else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velMax = 220
        }

        else if(ptipo == 3){
            this.tipo = "Comum"
            this.velMax = 160
        }

        else{
            this.tipo = "Militar"
            this.velMax = 180
        }
    }

    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getVelMax(){
        return this.velMax
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVelMax(velMax){
        this.velMax = velMax
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`VelMax: ${this.velMax}`)
    }  
}

let carro1 = new carro("Fuscão preto", 2)
carro1.setNome("cavalo")
//mudo o nome do bagulho pra essa bomba pela coleção set.

//carro1.info()
//Aqui eu pucho a informação que ta armazenado nesse bagulho ai chamado info(), e nesse bagulho ai ta
//o retorno dos parametros pelo console.log.

console.log(carro1.getNome())
//Uso metodo get pra puxar somente uma informação, a do parametro.
