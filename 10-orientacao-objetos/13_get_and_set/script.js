class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    latir() {
        console.log("Au Au")
    }

    get getCor() {
        return this.cor
    } 

    set setCor(cor) {
        this.cor = cor
    }
}

let Cid = new Cachorro("Yorkshire", "Preto")

console.log(Cid)
console.log(Cid.getCor)

Cid.setCor = "Branco"
console.log(Cid.getCor)