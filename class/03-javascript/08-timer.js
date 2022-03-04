let time=180
setInterval(() => {
    if(time >= 0) {
        const min = String(Math.floor(time/60)).padStart(2,'0')
        const sec = String(time%60).padStart(2,'0')
        console.log( min + ":" + sec) 
        time -=1
    }
},1000)