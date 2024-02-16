const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password_confirm");
let errorClass = document.querySelector("#passwordDiv")


function passwordMatch(){
    if(password.value !== passwordConfirm.value){
        errorClass.classList.add("error");
        password.style.borderColor = "red"
        passwordConfirm.style.borderColor = "red"
    }else{
        errorClass.classList.remove("error");
        password.style.borderColor = ""
        passwordConfirm.style.borderColor = ""
    }
}

password.addEventListener("input",passwordMatch)
passwordConfirm.addEventListener("input",passwordMatch)

