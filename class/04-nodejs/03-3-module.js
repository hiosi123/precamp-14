const {odd, even} = require('./03-1-module');
const checkNumber = require('./03-2-require');

function checkStringOddOrEven(str) {
    if (str.length%2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('ketter'));