const date = document.querySelector("h2#date");
const clock = document.querySelector("h2#clock");

function getDate() {
    const today = new Date();
    const year = String(today.getFullYear());
    const month = String(today.getMonth()).padStart(2, "0");
    const day = String(today.getMonth()).padStart(2, "0");
    date.innerText = `${year}년 ${month}월 ${day}일`;
}

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setTimeout(getClock, 1000);
getDate();
setInterval(getDate, 1000);
getClock();
setInterval(getClock, 1000);