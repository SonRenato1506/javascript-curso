function decre (x) {
    if(x > 0) {
        for(x; x > 0; x--) {
            if(x % 2 == 0) {
                console.log(x)
            }
        }
    }
}

decre(21)