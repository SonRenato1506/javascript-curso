class ContaBancaria {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        this.saldoCorrente = saldoCorrente
        this.saldoPoupanca = saldoPoupanca
        this.jurosPoupanca = jurosPoupanca
    }

    deposito(x) {
        this.saldoCorrente += x
    } 

    saque(x) {
        this.saldoCorrente = this.saldoCorrente - x
    }

    transferir(x) {
        this.saldoPoupanca = this.saldoPoupanca - x
        this.saldoCorrente += x + this.jurosPoupanca
    }
}

class ContaEspecial extends ContaBancaria {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        super(saldoCorrente, saldoPoupanca, jurosPoupanca * 2);
    }
}

let renatoConta = new ContaBancaria(2000, 5000, 200)

console.log(renatoConta)
renatoConta.deposito(1000)
renatoConta.saque(2000)
console.log(renatoConta)
renatoConta.transferir(3000)
console.log(renatoConta)

console.log()

let renatoConta2 = new ContaEspecial(2000, 5000, 200)

console.log(renatoConta)
renatoConta.deposito(1000)
renatoConta.saque(2000)
console.log(renatoConta)
renatoConta.transferir(3000)
console.log(renatoConta)