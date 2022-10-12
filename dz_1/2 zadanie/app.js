let smallBlock = document.querySelector(".small");


const MoveLeft = () => {
    smallBlock.addEventListener("click", () => {
        smallBlock.style.left += `${20}px`
    })
    MoveLeft()
}
MoveLeft()

// const MoveLeft = () => {
//     // smallBlock.addEventListener("click", () => {
//         smallBlock.style.left = +`${20}px`
//     // })
//
//     MoveLeft()
//
// }
// MoveLeft()
//
//
// function Left() {
//     smallBlock.addEventListener("click", () => {
//         smallBlock.style.left = `${20}px`
//     })
//     Left()
// }
//
//
// Left()


// const parentsList = (obj) => {
//   if (obj.parents) {
//     for (let key in obj.parents) {
//       console.log(key);
//       parentsList(obj.parents[key]);
//     }
//   } else {
//     console.log("no such key");
//   }
// };
//
// for (let key in people) {
//   parentsList(people[key]);
// }


phoneCheck.addEventListener("click", () => {
    if (phoneRegExp.test(phoneInput.value)) {
        phoneResult.innerText = "ok";
        phoneResult.style.color = "green";
    } else {
        phoneResult.innerText = "not ok";
        phoneResult.style.color = "red";
    }
});