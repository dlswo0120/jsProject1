const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USER_KEY = "username";
const HIDDEN_NAME ="hidden";

function paintGreetings(name){
    greeting.innerText= `hello ${name}`;
    greeting.classList.remove(HIDDEN_NAME);
}

function onSubmitLogin(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_NAME);
    const name = loginInput.value;
    loginInput.value="";
    localStorage.setItem(USER_KEY,name);
    paintGreetings(name);
}



const savedUserName= localStorage.getItem(USER_KEY);
if(savedUserName === null){
    //show the form
    loginForm.classList.remove(HIDDEN_NAME);
    loginForm.addEventListener("submit", onSubmitLogin);
}else{
    //show the greeings
    paintGreetings(savedUserName);
}