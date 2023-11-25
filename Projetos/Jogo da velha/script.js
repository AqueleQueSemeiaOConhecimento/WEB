//sao as celulas
const cellElements = document.querySelectorAll(".cell");

//Aponta o proximo elemento que vai ser jogado, x ou circle
const board = document.querySelector(".board");

//Texto onde vai aparecer quem venceu e quem perdeu
let texto = document.querySelector(".winning-text")

//pegando botão da musica
const btn_musica = document.getElementById("som")

//Div que precisa de display flex pra aparecer no final
const div = document.querySelector(".winning-message")

//Empate
const gif = "giphy.gif"

//Vitória
const gifVit = "giphy1.gif"

//Botão de reiniciar o game
const button = document.querySelector(".reiniciar")

//Chamando aqui, mas é usada para verificar se é o turno de circle ou não
let isCircleTurn;

//imagens do jogo
const somUp = "volume_up.png"
const somOff = "volume_off.png"



//Som do jogo
const somzeira = new Audio("8bits.mp3")
somzeira.loop=-1

let variavelDeControle = true

//Combinações da vitoria de um player
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//Função que permite evento de click so 1 vez por celula e inicia com X sendo o primeiro a jogar
const startGame = () => {
    isCircleTurn = false;
    for(const cell of cellElements) {
        cell.classList.remove("circle")
        cell.classList.remove("x")
        cell.removeEventListener("click", handleClick)
        cell.addEventListener("click", handleClick, {once:true});
    }
    setClassHover();
    div.classList.remove("classDisplayFlex")
}

//Função pra verificar empate
const endGame = (isDraw) => {
    if(isDraw) {texto.innerText = "Empate!"
    texto.style.backgroundImage = "url('"+ gif +"')"
}
    else{
        texto.innerText = isCircleTurn ? "O Venceu!" : "X Venceu!"
        texto.style.backgroundImage = "url('"+ gifVit +"')"
}
    div.classList.add("classDisplayFlex")
}


//Função que vê se algum player ganhou
const checkForWin = (player) => {
    return winningCombinations.some(combination => {
          return combination.every(index => {
            return cellElements[index].classList.contains(player);
          })      
    })
}

const checkForDraw = () => {
    return [...cellElements].every(cell => {
        return cell.classList.contains("x") || cell.classList.contains("circle")
    })
}

//Verifica se é vez de x ou circle jogar
const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
}

//Adiciona e remove class, ela foi chamada no startGame e swapTurns
const setClassHover = () => {
    board.classList.remove("circle")
    board.classList.remove("x")
    if(isCircleTurn){
        board.classList.add("circle");
    }
    else{
        board.classList.add("x");
    }
}

//Adiciona e remove as classes do board para que o jogo ocorra
const swapTurns = () => {
    isCircleTurn = !isCircleTurn
    setClassHover()
}

//Função que comanda quase tudo, ela pega os elementos e joga para outras função, ela faz coisas
//como verificar vitória e empate, adicionar classes e por ai vai
const handleClick = (el) => {
    //Colocando a marca X ou circle
    const cell = el.target;
    const classToAdd = isCircleTurn ? "circle": "x";

    placeMark(cell, classToAdd);
    
    const isWin = checkForWin(classToAdd);
    
    const isDraw = checkForDraw()
    //Verifica empate ou vitoria
    if(isWin){
        endGame(false)
    } else if(isDraw){
        endGame(true)
    }
    else{
        swapTurns();
    }

}

//Chamando função startGame()
startGame()

//Reiniciar o game
button.addEventListener("click", startGame)

//Musica, da play na musica e muda a figurinha da musica/icone
btn_musica.addEventListener("click", (evt) => {
    if(variavelDeControle){
        somzeira.play()
        btn_musica.style.backgroundImage = "url('" + somUp + "')";
    }
    else{
        somzeira.pause()
        btn_musica.style.backgroundImage = "url('" + somOff + "')";
    }
    variavelDeControle = !variavelDeControle

})