const palindromes = function (inputString) {
    string = inputString.replace(/[^a-zA-z0-9]/g, '');
    let splitString = string.split("");
    let reverse = splitString.reverse();
    let reverseString = reverse.join("");
    if (string.toLowerCase() === reverseString.toLowerCase()) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
