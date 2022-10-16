let smallBox = document.querySelector(".smallBox");
let position = 0;
let topPosition = 0;

const Move = () => {
    if (position <= 460 && topPosition == 0) {
        position += 16
        smallBox.style.left = `${position}px`;
        setTimeout(Move, 100)
    } else if (position >= 460 && topPosition <= 460) {
        topPosition += 16;
        smallBox.style.top = `${topPosition}px`;
        setTimeout(Move, 100)
    } else if (position > 0 && topPosition <= 464) {
        position -= 16
        smallBox.style.left = `${position}px`;
        setTimeout(Move, 100)
    } else if (position >=0 && topPosition > 0) {
        topPosition -= 16;
        smallBox.style.top = `${topPosition}px`;
        setTimeout(Move, 100)
    }
}
Move()


let counter = 0;

setInterval (() => {
    counter++
    console.log(counter, 'sec');
}, 1000);