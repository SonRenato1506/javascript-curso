class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    latir() {
        console.log("Au Au")
    }
}

Cachorro.prototype.raca = "SRD"
let patas = Symbol()
Cachorro.prototype[patas] = 4

let Cid = new Cachorro("Yorkshire", "Preto")

console.log(Cachorro.prototype[patas])
Cid.latir()
console.log(Cachorro.prototype.raca)
console.log(Cid.raca)

