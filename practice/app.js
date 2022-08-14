// console.log("const는 상수 - 고정");
// console.log("let은 변수");
// console.log("true, false는 on/off의 개념");
// console.log("null은 비어있음, undefined는 variable이 메모리에 만들어졌지만 값이 없는 것")

// const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// console.log(daysOfWeek[0]);
// daysOfWeek[6] = 'sun';
// console.log(daysOfWeek);
// daysOfWeek.push("hahaha");
// console.log(daysOfWeek);
// daysOfWeek.pop;
// console.log(daysOfWeek);

/*
const player = {
    name: "hazzun",
    tall: 170,
    fat: false,
    sayYes: function (name) {
        console.log(name + "!!")
    }
};

console.log(player);
console.log(player.name);
player.favorite = "miniyoung2";
console.log(player);
player.fat = true;
console.log(player);
player.sayYes("test");
*/

/*
function sayHello(name) {
    alert("Hi! " + name);
    console.log("your name is " + name)
}

sayHello("hazzun");
sayHello("miniyoung");
*/

/*
const calculator = {
    plus: function (a, b) {
        alert(a + b);
    },
    minus: function (a, b) {
        alert(a - b);
    },
    devide: function (a, b) {
        alert(a / b);
    },
    powerOff: function (a, b) {
        alert(a ** b);
    }
}
calculator.plus(10, 2)
calculator.minus(10, 2)
calculator.devide(10, 2)
calculator.powerOff(10, 2)
*/

/*
const howOld = parseInt(prompt("How old R U?"));

if (isNaN(howOld)) {
    alert("Plz wtire a number ###");
}
else {
    alert("Oh, UR age is " + howOld + " !!");
}
*/

// document의 body, head, title은 중요하기때문에 존재, 나머지는 querySelector로 찾자 
document.title = "js로 html값 변경하기"

/*

// getElementsByClassName은 array를 가져다 줌 + querySelectorAll도 array반환
const getClass = document.getElementsByClassName("클래수");
console.log(getClass);

const getQuery = document.querySelector(".클래수:nth-child(2) h1");
console.log(getQuery);
console.dir(getQuery);
getQuery.style.color = "blue";

const queryTest = document.querySelector("div:nth-child(2) h1");
queryTest.innerHTML = "es";

const lastText = document.querySelector("div:nth-child(3) h1");
// console.log(lastText);
function handleTextClick() {
    queryTest.style.color = "red";
}
function handleMouseEnter() {
    queryTest.style.color = "yellow";
    queryTest.innerText = "hello"
}
function handleMouseLeave() {
    queryTest.style.color = "green";
    queryTest.innerText = "Bye~~"
}
function handleColorChange() {
    const currentColor = lastText.style.color;
    let changeColor;
    if (currentColor == "black") {
        changeColor = "tomato";
    } else {
        changeColor = "black";
    }
    lastText.style.color = changeColor;
}

queryTest.addEventListener("click", handleTextClick);
queryTest.addEventListener("mouseenter", handleMouseEnter);
queryTest.addEventListener("mouseleave", handleMouseLeave);
lastText.addEventListener("click", handleColorChange);

*/

const h1 = document.querySelector("h1");
// console.dir(h1);
function handleTitleClick() {
    // const activeClass = "active";
    // if (h1.classList.contains(activeClass)) {
    //     h1.classList.remove(activeClass);
    // } else {
    //     h1.classList.add(activeClass);
    // }
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);