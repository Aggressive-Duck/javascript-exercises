const sumAll = function(x,y) {
    if((typeof x === "number" && typeof y === "number") &&
        (x%1 == 0 && y%1 == 0) &&
        (x > 0 && y > 0)) {
        if(x > y){
            j = x;
            i = y;
        } else {
            j = y;
            i = x;
        }
        let sum = 0;
        for(i; i <= j; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
