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