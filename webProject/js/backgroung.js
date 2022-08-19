const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
]

const backImg = document.querySelector("img");
// console.log(backImg);
// console.log(backImg.src);



// const bgImage = document.createElement("img");
// console.log(bgImage);
// const chosenImage = images[Math.floor(Math.random() * images.length)];

// bgImage.src = `img/${chosenImage}`;
// console.log(bgImage.src);
// document.body.appendChild(bgImage);

const smallImg = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg"
]

const smallBackImg = document.querySelector("img");


const width = document.querySelector(".container");
// console.log(width.clientWidth);

if (width.clientWidth < 767) {
    smallBackImg.src = `imgSmall/${smallImg[Math.floor(Math.random() * smallImg.length)]}`;
} else {
    backImg.src = `img/${images[Math.floor(Math.random() * images.length)]}`;
}