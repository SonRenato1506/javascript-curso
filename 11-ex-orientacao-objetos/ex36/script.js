class contaBanco {
    constructor(saldo) {
        this.saldo = saldo
    }

    deposito(x) {
        this.saldo +=  x
    } 

    saque(y) {
        this.saldo = this.saldo - y
    }
}

let renatoConta = new contaBanco(100)
renatoConta.deposito(50)
renatoConta.saque(100)
console.log(renatoConta.saldo)