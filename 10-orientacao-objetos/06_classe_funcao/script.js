function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.patas = patas
    cachorro.cor = cor;
    return cachorro
}

let cid = criarCachorro("YorkShire", 4, "preto")

console.log(cid)