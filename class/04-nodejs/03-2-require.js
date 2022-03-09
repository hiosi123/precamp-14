const {odd, even} = require('./03-1-module')



function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    } else {
        return even;
    }
}


module.exports = checkOddOrEven;