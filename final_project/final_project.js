
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
    document.getElementById('auth__button').setAttribute('style','color:gray');
    
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

    finshedBtn = () => {
        clearInterval(timer);

        document.getElementById('auth__finished').disabled = true;
        document.getElementById('auth__finished').setAttribute('style', 'color: white; background-color:#0068FF')
       
       
    }

}







finshedBtn = () => {
    document.getElementById('auth__finished').disabled = true;
    alert('인증을 완료하셨습니다');
    
}

function validation() {
    const email = document.getElementById('body__box1').value;
    const name = document.getElementById('body__box2').value;
    const password1 =  document.getElementById('body__box3').value;
    const password2 =  document.getElementById('body__box4').value;
   
    if (email.toString().includes('@') === false) {
        document.getElementById('box1__warning').innerText = '이메일을 확인해주세요';
        document.getElementById('box2__warning').innerText = '';
        document.getElementById('box3__warning').innerText = '';
        document.getElementById('box4__warning').innerText = '';
        return 
    }  
    if (name === '') {
        document.getElementById('box1__warning').innerText = '';
        document.getElementById('box2__warning').innerText = '이름을 입력해주세요';
        document.getElementById('box3__warning').innerText = '';
        document.getElementById('box4__warning').innerText = '';
        return
    }
    if (password1.length <8 || password1.length >16) {
        document.getElementById('box1__warning').innerText = '';
        document.getElementById('box2__warning').innerText = '';
        document.getElementById('box3__warning').innerText = '비밀번호 길이를 확인해주세요';
        document.getElementById('box4__warning').innerText = '비밀번호 길이를 확인해주세요';
        return 
    }
    if (password1 === password2 === false) {
        document.getElementById('box1__warning').innerText = '';
        document.getElementById('box2__warning').innerText = '';
        document.getElementById('box3__warning').innerText = '비밀번호가 일치하지 않습니다';
        document.getElementById('box4__warning').innerText = '비밀번호가 일치하지 않습니다';
        return 
    }
    document.getElementById('box1__warning').innerText = '';
    document.getElementById('box2__warning').innerText = '';
    document.getElementById('box3__warning').innerText = '';
    document.getElementById('box4__warning').innerText = '';
    alert ('회원가입을 축하합니다')
}
