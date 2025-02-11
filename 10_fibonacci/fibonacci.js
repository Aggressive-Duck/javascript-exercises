const fibonacci = function(lastIndex) {
    if(lastIndex < 0) return "OOPS";
    let array = [0,1];
    for (let i = 2; i <= lastIndex; i++){
        array[i] = array[i-2] + array[i-1];
    }
    return array[lastIndex];
};

// Do not edit below this line
module.exports = fibonacci;
