class Carro {
    constructor(marca, cor, gasolina) {
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
    }

    dirigir(x) {
        if(this.gasolina < x) {
            this.gasolina = 0;
        } else {
            this.gasolina = this.gasolina - x
        }
    }

    abastecer(x) {
        this.gasolina += x
    }
}

let carro1 = new Carro ("mercedes", "azul", 50)
console.log(carro1)
carro1.dirigir(44)
console.log(carro1)
carro1.abastecer(30)
console.log(carro1)