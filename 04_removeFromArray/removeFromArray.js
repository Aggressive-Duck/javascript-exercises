const removeFromArray = function(numbers) {
    let numbersArray = [];
    numbersArray = numbers;
    for(let j = 1; j < arguments.length; j++){
     
        numbersArray = numbersArray.filter(item => item !== arguments[j]);
    }
        
        
    
    return numbersArray;
};

// Do not edit below this line
module.exports = removeFromArray;
