n = 6
s = 0

for(c = n-1; c > 1; c--) {
    if(n % c == 0) {
        s++
    }
}

if(s == 0) {
    console.log(`${n} é primo`)
} else {
    console.log(`${n} não é primo`)
}