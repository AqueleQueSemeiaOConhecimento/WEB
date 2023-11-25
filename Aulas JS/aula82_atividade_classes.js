//palco onde as bolas danção
const palco = document.getElementById("palco")

//Número de objetos
const num_objetos = document.getElementById("num_objetos")

//Input onde voce fornece a quantidade de bolas que vai criar
const txt_qtde = document.getElementById("txt_qtde")

//Botão de adicionar bolas
const btn_add = document.getElementById("btn_add")

//Botão de remover bolas
const btn_remover = document.getElementById("btn_remover")


let larguraPalco = palco.offsetWidth //largura palco
let alturaPalco = palco.offsetHeight //altura palco


let bolas = [] //Array que vai armazenar as bolas

let numBola=0 //Variavel que vai armazenar numero de bolas

class Bola{
    constructor(arrayBolas, palco){
        this.tam=Math.floor(Math.random()*15)+10 //tamanho bola
        this.r=Math.floor(Math.random()*255) //cor r da bola
        this.g=Math.floor(Math.random()*255) //cor g da bola
        this.b=Math.floor(Math.random()*255) //cor b da bola
        this.px=Math.floor(Math.random()*(larguraPalco-this.tam)) //position de criação x
        this.py=Math.floor(Math.random()*(alturaPalco-this.tam)) //position de criação y
        this.velx=Math.floor(Math.random()*2)+0.5 //vel no eixo x
        this.vely=Math.floor(Math.random()*2)+0.5 //vel no eixo y
        this.dirx=(Math.random()*10)>5?1:-1 //Direção da bola eixo x
        this.diry=(Math.random()*10)>5?1:-1 //Direção da bola eixo y
        this.palco = palco //recebe palco
        this.arrayBolas = arrayBolas //recebe arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random()*1000000000000)//Cria um id
        this.desenhar()//chama função desenhar
        this.controle=setInterval(this.controlar, 10)//no this.controel chamamos a função this.controlar
        //num intervalo de a cada 10 milisegundos
        this.eu = document.getElementById(this.id)//elemento bolinha adicionada
        numBola++ //variavel numero de bolas sendo adicionada +1 toda vez que um objeto é criado
        num_objetos.innerHTML = numBola //exibir o numero de bolas na tela
        
    }
    minhaPos = () => {
        return this.arrayBolas.indexOf(this)
        //função retorna a posição do array que o elemento esta, usando o .indexOf() como meio de 
        //pegar o elemento
    }

    remover = () => {
        clearInterval(this.controle)//remove o intervalo presente no this.controle
        bolas = bolas.filter((b)=> {
            if(b.id != this.id){
                return b
            }
        })
        //em bolas é aplicado um filter para todos os elementos presenter no array bolas
        //ele ira retornar somente as bolas com id diferentes, e nao ira retornar a com id igual
        //assim removendo ela do array bolas.

        this.eu.remove() //remove do dom o elemento
        numBola--//diminui em  1, pois removi uma bola
        num_objetos.innerHTML=numBola //atualizo o numero de bolas mostrados no html
    }

    desenhar = () => {
        const div = document.createElement("div") //crio o elemento div
        div.setAttribute("id",this.id) //adiciono o id nele
        div.setAttribute("class","bola") //adiciona a class bola nele
        div.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        //aqui controlo todo o style dele
        this.palco.appendChild(div) //adiciono o elemento/bola no palco
    }

    colisao_bordas = () => {
        if(this.px+this.tam >= larguraPalco){
            this.dirx = -1
        }
        else if(this.px <= 0){
            this.dirx = 1
        }
        //Se a soma da posição X com o tamanho da bola for maior que a largura do palco. a bola vira
        //a direção

        if(this.py+this.tam >= alturaPalco){
            this.diry = -1
        }
        else if(this.py <= 0){
            this.diry = 1
        }
        //Se a soma da posição Y com o tamanho da bola for maior que a altura do palco, a bola vira
        //a direção
    }

    controlar = () => {
        this.colisao_bordas()//chamo a a função colisao_bordas
        this.px+=this.dirx*this.velx //atualizo a posição X com direção e velocidade
        this.py+=this.diry*this.vely //atualizo a posição Y com direção e velocidade
        this.eu.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        //aplico os atributos a nova posição da bola
        if(this.px > larguraPalco||(this.py > alturaPalco)){
           this.remover()
        }
        //Se a posição X ou Y for maior que a a altura e largura do palco, a bolinha é removida pela
        //função this.remover()
    }
}



//Controla a largura da janela
window.addEventListener("resize",(evt) => {
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight 
})

//Evento que adiciona x número de bolas
btn_add.addEventListener("click", (evt) => {
    const qtde = txt_qtde.value 
    for(let i=0; i < qtde; i++){
        bolas.push(new Bola(bolas,palco))
    }
})

//Evento que remove todas as bolas
btn_remover.addEventListener("click", (evt) => {
    bolas.map((e)=> {
        e.remover()
    })
})