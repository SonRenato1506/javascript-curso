function inverso (x) {
    s = 0
    if (x == 0) {
        x = 0
    } else if (x > 0) {
        for(c = x; c > 0; c--) {
            s++
        }
        x = 0-s
    } else  {
        for(c = x; c < 0; c++) {
            s++
        }
        x = s
    }
    return x
}

console.log(inverso(0))
console.log(inverso(44))
console.log(inverso(-13))