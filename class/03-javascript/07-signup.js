

function checkValidation() {
    const email= document.getElementById('email').value
    const password1= document.getElementById('password1').value
    const password2= document.getElementById('password2').value

    // 만약 이메일 패스워드1 패스워드2 가 빈 값이 아닐때
    // 버튼 비활성화를 제거하고, 버튼의 배경색을 노란색으로 변경
    // else disabled = true 로 유지 된다, 버튼의 배경색을 제거
    if (email !=="" && password1 !=="" && password2 !=="") {
        document.getElementById('submit').disabled= false;
        document.getElementById('submit').setAttribute('style','background-color:yellow')
    } else {
        document.getElementById('submit').disabled= true;
        document.getElementById('submit').setAttribute('style','background-color:none')
    }
}