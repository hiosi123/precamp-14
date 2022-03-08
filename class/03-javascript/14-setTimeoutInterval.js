// function fn() {
//     console.log(3)
// }

// setTimeout(fn, 3000);

// function showName(name) {
//     console.log(name);
// } 
// const tId = setTimeout(showName, 3000, 'mike')


// clearTimeout(tId);




let num=60;
function timer() {
    console.log(`접속시간이 ${num--}초 남았습니다`);
    if (num < 0) {
        clearInterval(AId)
    }
}

const AId = setInterval(timer, 1000);
