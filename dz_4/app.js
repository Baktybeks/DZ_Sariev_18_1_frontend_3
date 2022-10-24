const  btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const reqest = new XMLHttpRequest();
    reqest.open("GET", "data.json");
    reqest.setRequestHeader("Content-type", "application/json")
    reqest.send();
    reqest.addEventListener("load", () =>{
        console.log(JSON.parse(reqest.response));
        const data = JSON.parse(reqest.response);
        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".age").innerHTML = data.age;
        document.querySelector(".surname").innerHTML = data.surname;
    })
});

// console.log("123");

// const obj = {
//     name: "John",
//     age: 20,
// }
// const key = "age"
//
// console.log(obj[key])
//
// console.log(obj.age)
// obj.id = 1;
//
// console.log(obj)
// const data = JSON.stringify(obj)
//
// console.log(data)
// console.log(JSON.parse(data))



//number string boolean null undefined obj arr
//
// if(42){
//     console.log(1);
// }



