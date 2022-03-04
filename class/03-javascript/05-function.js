let isStarted = false;

pressedBtn = () => {
    if (isStarted === true) {
        return
    }
    isStarted = true;
    token = String(Math.floor(Math.random() * 1000000)).padStart(6,'0');
    document.getElementById('auth').innerText = token;
    document.getElementById('auth').style.color = '#' + token;
    document.getElementById('Button').disabled = false;
    let time= 180;
    let timer = null;

    timer = setInterval(() => {
        if(time >= 0) {
            const min = String(Math.floor(time/60)).padStart(2,'0')
            const sec = String(time%60).padStart(2,'0')
            result = min + ':' + sec
            document.getElementById('timer').innerText = result
            time -=1
        } else {
            document.getElementById("Button").disabled = true;
            isStarted = false;
            clearInterval(timer);
        }
    },1000)
   

   

}

