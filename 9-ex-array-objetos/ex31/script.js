array1 = [1,2,3,4,5]
array2 = [1,2,3]

s = soma(array1.length + array2.length)

if(s < 5) {
    console.log("Poucos elementos")
} else if (s == 5) {
    console.log("Possui 5 elementos")
} else {
    console.log("Muitos elementos")
}
 
function soma (x, y) {
    return x + y
}