let userName=document.querySelector(".userName")
let lastName=document.querySelector(".lastName")
let email = document.querySelector(".email")
let password1= document.querySelectorAll(".password") [0]
let password2= document.querySelectorAll(".password") [1]

let btn = document.querySelector(".btn")

btn.addEventListener("click", clickMe)

let userNameReg = /^[A-Za-zА-Яа-я\- ]*[^0-9][A-Za-zА-Яа-я\- ]*$/;
let userEmailReg= /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
let userPasswordReg= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/

function clickMe(event){
    event.preventDefault()
    validate ()
}
function validate(){
    if(userName.valur === "Aziz"){
        userName.classList.add("error")
    }
}