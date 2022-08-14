const clockTitle = document.querySelector(".js-clock");


function getClock() {
    const christmas = new Date("2022-12-25");
    const date = new Date();

    // const years = date.getFullYear();
    // const hours = String(date.getHours()).padStart(2, "0");
    // const minutes = String(60 - date.getMinutes()).padStart(2, "0");
    // const seconds = String(60 - date.getSeconds()).padStart(2, "0");

    // clockTitle.innerText = `${years}:${hours}h ${minutes}m ${seconds}s`;
    // console.log(christmas);
    // console.log(date);
    // console.log(christmas - date);

    const untilDay = christmas - date;

    const days = String(Math.floor(untilDay / (1000 * 60 * 60 * 24)));
    const hours = String(Math.floor((untilDay / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((untilDay / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor(untilDay / 1000 % 60)).padStart(2, "0");
    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
getClock();
setInterval(() => {
    getClock();
}, 1000);