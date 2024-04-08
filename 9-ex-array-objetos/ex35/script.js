calculadora = {
    Soma: function (x, y) {
        return x + y
    },
    Substracao: function(x, y) {
        if(x > y) {
            return x - y
        } else {
            return y - x
        }
    },
    Multiplicacao: function(x, y) {
        return x * y
    },
    Divisao: function(x, y) {
        if(x > y) {
            return x / y
        } else {
            return y / x
        }
    }
}

console.log(calculadora.Soma(2,2))
console.log(calculadora.Substracao(7,4))
console.log(calculadora.Multiplicacao(7,7))
console.log(calculadora.Divisao(49,5))
