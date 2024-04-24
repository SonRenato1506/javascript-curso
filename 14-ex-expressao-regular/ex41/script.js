const soMaiusculo = /[A-Z]/

console.log(soMaiusculo.test('a'))
console.log(soMaiusculo.test('A'))
console.log(soMaiusculo.test('Arthur'))
console.log(soMaiusculo.test('arthur'))
console.log(soMaiusculo.test('ARTHUR'))