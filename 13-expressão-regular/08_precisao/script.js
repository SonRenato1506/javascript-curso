const cep =  /\d{5}-\d{3}/

console.log(cep.test("88117-500"))
console.log(cep.test("acd"))
console.log(cep.test("881-50"))
console.log(cep.test("99999-999"))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/

console.log(tel.test("(48)9999-9999"))
console.log(tel.test("(48)99999-9999"))
console.log(tel.test("(48)999-9999"))