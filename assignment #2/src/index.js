const body = document.querySelector("body");

function widthChange() {
    let intFrameWidth = window.innerWidth;
    const bigSizeClass = "bigSize";
    const smallSizeClass = "smallSize"
    if (intFrameWidth >= 900) {
        body.classList.add(bigSizeClass);
    } else if (intFrameWidth < 900 && intFrameWidth > 600) {
        if (body.classList.contains(smallSizeClass)) {
            body.classList.remove(smallSizeClass);
        } else if (body.classList.contains(bigSizeClass)) {
            body.classList.remove(bigSizeClass);
        }
    } else {
        body.classList.add(smallSizeClass);
    }
}

window.addEventListener("resize", widthChange);