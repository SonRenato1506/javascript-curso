class Carrinho {
    constructor() {
        this.itens = [];
        this.quant = 0;
        this.valor = 0;
        this.quantidade = [];
        this.valores = [];
    }

    add(item, quan, valo) {
        this.itens.push(item);
        this.quantidade.push(quan);
        this.valores.push(valo);
        this.quant += quan;
        this.valor += valo;
    }

    rem(item) {
        for (let s = 0; s < this.itens.length; s++) {
            if (this.itens[s] === item) {
                this.itens.splice(s, 1);
                this.quant -= this.quantidade[s];
                this.valor -= this.valores[s];
                this.quantidade.splice(s, 1);
                this.valores.splice(s, 1);
            }
        }
    }
}

let Carrinho1 = new Carrinho();
Carrinho1.add("Maçã", 6, 6);
Carrinho1.add("Banana", 12, 6);
Carrinho1.rem("Maçã");

console.log(Carrinho1);
