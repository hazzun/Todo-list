const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
// console.log(loginInput);
// console.dir(loginInput);
const greeting = document.querySelector("#greeting");
// console.log(greeting);
const logout = document.querySelector(".logout-form");

const inputTodo = document.querySelector("#todo-form input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginClick(event) {
    event.preventDefault();
    // console.log(event);
    loginForm.classList.add(HIDDEN_CLASSNAME)
    inputTodo.classList.remove(HIDDEN_CLASSNAME);
    const inputValue = loginInput.value;
    // console.log(inputValue);
    // greeting.innerText = "Hello " + inputValue;
    localStorage.setItem(USERNAME_KEY, inputValue);
    paintGreeting(inputValue);
}

function paintGreeting(username) {
    const span = document.createElement("span");
    span.classList.add("waving-hand");
    span.innerText = `👋🏻`;
    greeting.innerText = `Hello, ${username}`;
    greeting.appendChild(span);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginClick);
    inputTodo.classList.add(HIDDEN_CLASSNAME);
} else {
    // show the greeting
    paintGreeting(savedUsername);
}



function logoutClick() {
    alert("로그아웃하시면 모든 정보가 사라집니다\n정말로 하실건가용?")
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem("todos");
}

logout.addEventListener("submit", logoutClick);