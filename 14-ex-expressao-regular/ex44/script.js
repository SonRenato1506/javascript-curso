const ip = /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/

console.log(ip.test("555.5.5.5"))
console.log(ip.test("8.8.8.8"))