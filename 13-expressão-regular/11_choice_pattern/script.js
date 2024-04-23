const reg = /\w+: (Matheus|João|Maria)/

console.log(reg.test("Nome: Matheus"))
console.log(reg.test("Nome: Maria"))
console.log(reg.test("Nome: João"))