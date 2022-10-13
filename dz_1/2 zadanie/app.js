let smallBox = document.querySelector(".smallBox");
let moveLeft = 0;

const MoveLeft = () => {
    moveLeft += 20
    smallBox.addEventListener("click", () => {
        if (moveLeft < 500-50-20) {
            smallBox.style.left = `${moveLeft}px`
            console.log("if=", moveLeft)
            MoveLeft()
        }
    })
};
MoveLeft()


// const MoveLeft = () => {
//     if (moveLeft < 500-50-20) {
//         moveLeft += 20
//         smallBox.addEventListener("click", () => {
//             smallBox.style.left = ${moveLeft}px
//         })
//         MoveLeft();
//     }
// }
// MoveLeft()