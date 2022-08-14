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
backImg.src = `img/${images[Math.floor(Math.random() * images.length)]}`;
// console.log(backImg.src);



// const bgImage = document.createElement("img");
// console.log(bgImage);
// const chosenImage = images[Math.floor(Math.random() * images.length)];

// bgImage.src = `img/${chosenImage}`;
// console.log(bgImage.src);
// document.body.appendChild(bgImage);