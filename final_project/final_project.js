
function changeFocus1() {
    let phone1 = document.getElementById("phone1").value
    
    if(phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

function changeFocus2() {
    let phone1 = document.getElementById("phone2").value
    
    if(phone1.length === 4) {
        document.getElementById("phone3").focus()
    }
}

let isStarted = false;

pressedBtn = () => {
   
    if (isStarted === true) {
        return
    }
    isStarted = true;
    token = String(Math.floor(Math.random() * 1000000)).padStart(6,'0');
    document.getElementById('auth__numbers').innerText = token;
    document.getElementById('auth__button').disabled = true;
    
    let time= 180;
    let timer = null;

    timer = setInterval(() => {
        if(time >= 0) {
            const min = String(Math.floor(time/60)).padStart(2,'0')
            const sec = String(time%60).padStart(2,'0')
            result = min + ':' + sec
            document.getElementById('auth__time').innerText = result
            time -=1
        } else {
            document.getElementById("auth__finished").disabled = true;
            isStarted = false;
            clearInterval(timer);
        }
    },1000)

}

finshedBtn = () => {
    document.getElementById('auth__finished').disabled = true;
    alert('인증을 완료하셨습니다');
    document.getElementById('auth__numbers').innerText = '000000'
    clearInterval(timer);
    document.getElementById('auth__time').innerText = '00:00'       
   
}

function validation() {
    if (document.getElementById('body__box1').innerText.toString().includes('@') === false) {
        return ('이메일 주소를 다시 확인해 주세요')
    }
    if (password.length <8 || password.length >16) {
        return ('비밀번호를 다시 확인해 주세요')
    }
    if (password === passwordCheck === false) {
        return ('비밀번호가 일치하지 않습니다')
    }
    alert ('회원가입을 축하합니다')
}
