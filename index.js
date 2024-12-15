const header_signIn = document.querySelector(".header .btn_sign_in ");
const header_signUp = document.querySelector(".header .btn_sign_up ");
const span_signUp = document.querySelector(".span_signup ");
const span_signin = document.querySelector(".span_signin ");
const register_box =document.getElementById("register");
const login_box =document.getElementById("login");


header_signUp.addEventListener("click",()=>{
    register_box.classList.remove("move_left");
    login_box.classList.add("move_right");
});
header_signIn.addEventListener("click",()=>{
    register_box.classList.add("move_left");
    login_box.classList.remove("move_right");
});
span_signUp.addEventListener("click",()=>{
    register_box.classList.remove("move_left");
    login_box.classList.add("move_right");
});
span_signin.addEventListener("click",()=>{
    register_box.classList.add("move_left");
    login_box.classList.remove("move_right");
});