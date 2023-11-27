let cnv = document.querySelector("canvas"); //pegando o canvas em uma variavel
let ctx = cnv.getContext("2d"); //variavel que armazena o contexto de renderização do canvas

let width = cnv.width //largura canvas
let height = cnv.height //altura canvas

var x; //variavel que vai se usada como eixo x
var y; //variavel que vai se usada como eixo y
let tileSize = 164; //variavel de controle
let tileSrcSize = 96;

//somzeira insana infinita
const som = new Audio("8bits.mp3")
som.loop = -1

//imagem que na teoria tem uma função ali, mas n boto fé nao, tive que usar um setInterval()
let img = new Image()
    img.src = "img.png"
    img.addEventListener("load", function(){
            //primeira chamada do labirinto
        requestAnimationFrame(loop, cnv)
    }, false)

//teclas de movimentação
let left = 37
let up = 38
let right = 39
let down = 40

//variaveis de controle movimentação
let mvLeft = false
let mvUp = false
let mvRight = false
let mvDown = false

//personagem
class player{
    constructor(){
        this.px = tileSize + 2;
        this.py = tileSize + 2;
        this.width = 24;
        this.height = 32;
        this.speed = 2;
        this.srcX = 0;
        this.srcY = tileSrcSize;
        this.countAnim = 0;
    }
}



//chamando o personagem em uma variavel
let play = new player()

let walls = [] //paredes onde o personagem vai colidir;

//labirinto
let maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1],
    [1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1],
    [1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1],
    [1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1],
    [1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1],
    [1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1],
    [1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1],
    [1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1],
    [1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
    [1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1],
    [1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1],
    [1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1],
    [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1],
    [1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1],
    [1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const total_width = maze[0].length * tileSize;
const total_height = maze.length * tileSize;

    //pegando os elementos que sao o muro
    for(let row in maze){
            for(let column in maze[row]){
                let tile = maze[row][column];
                if(tile === 1){
                    let wall = {
                        x: tileSize*column,
                        y: tileSize*row,
                        width: tileSize,
                        height: tileSize
                    };
                    walls.push(wall)
                }
            }
        }
    
    //class camera
    class Cam{
        constructor(){
            this.posX = 0
            this.posY = 0
            this.width = width
            this.height = height
            this.leftMovCam()
            this.topMovCam()
            this.rightMovCam()
            this.bottomMovCam()
        } 
        //move camera pra esquerda quando necessario
        leftMovCam = () => {
            return this.posX + (this.width*0.25)
        }

        //move camera para o topo quando necessario
        topMovCam = () => {
            return this.posY + (this.height*0.25)
        }

        //move camera pra direita quando necessario
        rightMovCam = () => {
            return this.posX + (this.width*0.75)
        }

        //move camera para baixo quando necessario
        bottomMovCam = () => {
            return this.posY + (this.height*0.75)
        }
    }

    let camera = new Cam() //crio e controlo a camera

    //função que controla a camera de acordo com a posição do personagem
    controllForCam = () => {
        //se a posição do jogar em X for menor que a posição da cameca na função leftMovCam(), a 
        //camera ira se ajustar, pois posição camera em X recebe posição do personagem em X menos
        //25% da largura da camera, a mesma logica se aplica aos outros if, digo, a logica de
        //ajustar a camera conforme o player se move.
        if(play.px < camera.leftMovCam()) {
            camera.posX = play.px - (camera.width * 0.25)
        } 
        if(play.py < camera.topMovCam()) {
            camera.posY = play.py - (camera.height * 0.25)
        }
        if(play.px + play.width > camera.rightMovCam()){
            camera.posX = play.px + play.width - (camera.width * 0.75)
        }
        if(play.py + play.height > camera.bottomMovCam()){
            camera.posY = play.py + play.height - (camera.height * 0.75)
        }

        camera.posX = Math.max(0, Math.min(total_width - camera.width, camera.posX));
        camera.posY = Math.max(0, Math.min(total_height - camera.height, camera.posY));
    }

    //função que controla a colusão com do player com os objetos
    //entra 2 objetos, o jogador e os blocos
    blockRectangle = (objA, objB) => {
        //pega a metade de cada um em cada eixo
        let distX = (objA.px + objA.width/2) - (objB.x + objB.width/2);
        let distY = (objA.py + objA.height/2) - (objB.y + objB.height/2);

        //pega a largura e altura de cada objeto e divide por 2
        let sumWidth = (objA.width + objB.width)/2
        let sumHeight = (objA.height + objB.height)/2

        //pega o calor da distancia dos eixos e coloca nas variaveis
        if(Math.abs(distX) < sumWidth && Math.abs(distY) < sumHeight){
            let overlapX = sumWidth - Math.abs(distX);
            let overlapY = sumHeight - Math.abs(distY)

            //se valor de eixo X for maior que eixo Y a equação fica valendo
            if(overlapX > overlapY){
                //caso a posição y do objeto seja maior do que 0 py recebe - overlapY que é a 
                //diferença de distancia entre eles, assim criando algo parecido com bloqueio de movimento.
                objA.py = distY > 0 ? objA.py + overlapY :  objA.py - overlapY
            }

            else{
                objA.px = distX > 0 ? objA.px + overlapX :  objA.px - overlapX
            }
            
        }
    }

    //testando para ver se é 1 muro
    parede = () => {
    for( let i in walls){
        let parede = walls[i];
        blockRectangle(play, parede)
    }
    }


    //função de quando a gente clica para andar
    function keydownHandler(e)  {
        var key = e.keyCode
        switch(key){
            case left:
                mvLeft = true;
                break;

            case up: 
                mvUp = true;
                break; 

            case right: 
                mvRight = true;
                break; 

            case down: 
                mvDown = true;
                break; 
        }
    }

    //função que o personagem para de andar al saltar 1 tecla, mv recebe false, fazendo o movimento parar.
    function keyupHandler(e)  {
        var key = e.keyCode
        switch(key){
            case left: 
                mvLeft = false;
                break; 

            case up: 
                mvUp = false;
                break; 

            case right: 
                mvRight = false;
                break; 

            case down: 
                mvDown = false;
                break; 
        }
    }

        // evento de pegar uma tecla e presionar para andar
        window.addEventListener("keydown", keydownHandler, false)

        // evento que a maquina entende que parou de precionar a tecla
        window.addEventListener("keyup", keyupHandler, false)


    //função usada para atualizar os elementos do jogo
    upadate = () => {
        //caso mvLeft seja true, e mvRight seja falso mas tambem seja o inverso disso, o 
        if(mvLeft && !mvRight){
            play.px -= play.speed
            //aqui pega os quadros, se olha bem a imagem é como uma matriz bidemensional
            play.srcY = tileSrcSize + play.height * 2
        }
        else if(mvRight && !mvLeft){
            play.px += play.speed
            //aqui ele pega ao virar para direita a imagem da linha 3, que na verdade é a linha 4,
            //mas como uma matriz começa do 0 ent...
            play.srcY = tileSrcSize + play.height * 3
        }

        if(mvUp && !mvDown){
            play.py -= play.speed
            play.srcY = tileSrcSize + play.height * 1
        }
        else if(mvDown && !mvUp){
            play.py += play.speed
            play.srcY = tileSrcSize + play.height * 0
        }

        //toda vez que uma destas variaveis for true inclementa +1 em play.countAnim;
        if(mvLeft || mvRight || mvUp || mvDown){
            play.countAnim++;

            //se play.countAnim for maior que 40 da merda, a animação buga, por que tem somente
            //8 imagems
            if(play.countAnim >= 40){
                play.countAnim = 0
            }
            //aqui ele pega na coloca e anima o passo, por isso é o countAnim/5 sendo um numero
            //inteiro, ai multiplicamos pelo play.width que conseguimos a movimentação desejada
            play.srcX = Math.floor(play.countAnim/5) * play.width
        }

        parede()
        controllForCam()
    }


    //função usada para renderizar os elementos da tela
    render = () => {
        //limpa os quadros do canva a cada quadro, para fazer o movimento
        ctx.clearRect(0,0, width, height);
        ctx.save()
        //atualiza as posições da camera
        ctx.translate(-camera.posX, -camera.posY)

        //nos 2 for() eu pego os indices e armazeno os elementos em uma variavel chamada tile, 
        //após isso verifico com um if se um dos elementos for igual a 1 atraves da variavel tile, 
        //sendo igual eu armazeno os elementos da coluna que sao igual a 1 na variavel x, e os elementos
        //da linha na variavel y, logo após eu renderizo.
        for(let row in maze){
            for(let column in maze[row]){
                let tile = maze[row][column]; 
                var x = column*tileSize
                var y = row*tileSize
                //ctx.fillRect(x,y,tileSize,tileSize) nao uso mais

                ctx.drawImage(
                    img,
                    tile * tileSrcSize, 0, tileSrcSize, tileSrcSize,
                    x, y, tileSize, tileSize
                )
                
            }
        }
        //ctx.fillStyle = "#00f"; nao uso mais, era pra dar cor pro personagem
        //ctx.fillRect(play.px,play.py, play.width, play.height) nao uso mais

        ctx.drawImage(
            img, 
            play.srcX, play.srcY, play.width, play.height,
            play.px, play.py, play.width, play.height
        )
        ctx.restore()

    }


    //função que fica se repetindo chamando as outras funções
    loop = () => {
        som.play()
        upadate();
        render();
        requestAnimationFrame(render, cnv)
    }

const start = setInterval(loop, 10)