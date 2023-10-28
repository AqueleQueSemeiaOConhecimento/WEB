const caixa = document.querySelector("#caixa")

//Coleção set não permite entradas duplicadas de elementos

let musicas = new Set(["musica1", "musica boa", "musica10"])

musicas.add("musica muito legal")
musicas.add("musica1")
musicas.add("musica1")
musicas.add("musica10")

console.log(musicas)

musicas.forEach((el) => {
    caixa.innerHTML+=el + "<br/>"
})
