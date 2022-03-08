let one; // 전역 Lexical 환경
one = 1;

function addOne(num) {
    console.log(one + num); // 내부 Lexical 환경
}

addOne(5); 


function makeAdder(x) {
    return function(y) {
        return x+y;
    }
}

const add3 = makeAdder(3);
console.log(add3(5));

function makeCounter() {
    num = 0;
    return function () {
        return num++;
    };
}

let counter = makeCounter();

console.log(counter());
