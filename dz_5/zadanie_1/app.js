const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const ru = document.querySelector("#ru");


// som.addEventListener("input", () => {
//     const   request = new XMLHttpRequest();
//     request.open("GET", "data.json");
//     request.setRequestHeader("Content-type", "application/json");
//     request.send();
//     request.addEventListener("load", () => {
//         const response = JSON.parse(request.response);
//         usd.value = (som.value / response.usd).toFixed(2);
//     })
// })

const convert = (elem, target1, target2, currency) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response);
            // isTrue
            //     ? target.value = (elem.value / response.usd).toFixed(2)
            //     : target.value = (elem.value * response.usd).toFixed(2);
            if (currency === "som") {
                target1.value = (elem.value / response.usd).toFixed(2);
                target2.value = (elem.value * response.ru).toFixed(2);
            } else if (currency === "usd") {
                target1.value = (elem.value * response.usd).toFixed(2);
                target2.value = (elem.value * response.usd / response.ru).toFixed(2);
            } else if (currency === "ru") {
                target1.value = (elem.value * response.ru / response.usd).toFixed(2);
                target2.value = (elem.value * response.ru).toFixed(2);
            }
            elem.value === "" ? (target1.value = "") || (target2.value = "") : null;
        });
    });
};
convert(som, usd, ru, "som")
convert(usd, som, ru, "usd")
convert(ru, usd, som, "ru")
