const nome = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(nome.test("renato_123"))
console.log(nome.test("renato@123"))
console.log(nome.test("renato-12333333333333333333333333333333"))
console.log(nome.test("re"))