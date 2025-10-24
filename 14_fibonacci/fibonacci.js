const fibonacci = function(position) {
    let a = 1;
    let b = 0;
    let sum = 0;

    if (typeof position === "string") {
        position = parseInt(position)
    }
    
    if (position < 0) {
        return "OOPS";
    } else if (position === 0) {
        return 0;
    } else {
        for(i = position; i > 1; i--) {
            sum = a + b;
            b = a;
            a = sum;
        }
        return a;
    }
}

// Do not edit below this line
module.exports = fibonacci;
