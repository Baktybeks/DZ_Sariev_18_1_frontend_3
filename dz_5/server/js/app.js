const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()


tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

// console.log(modal)
// console.log(modalTrigger)
// console.log(closeModalBtn)

const showModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
}

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
    window.scrollTo(pageXOffset, 0);

}

modalTrigger.addEventListener("click", showModal)
closeModalBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal()
    }
})

const scrollHeight = document.documentElement.scrollHeight;
const clientHeight = document.documentElement.clientHeight;
const height = scrollHeight - clientHeight;

console.log(scrollHeight)
console.log(clientHeight)
console.log(height)

//1 задание сделать слайдер автоматическим
let index = 0
setInterval(() => {
    index = ++index === tabsContent.length ? 0 : index
    hideTabContent()
    showTabContent(index)
}, 2000)


//2 задание вызывать модалку по скролу до конца страницы
window.addEventListener('scroll', function () {
    if (pageYOffset > height) {
        showModal()
    }
});


const forms = document.querySelectorAll("form");

forms.forEach((item) => {
    postData(item);
    // const request = new XMLHttpRequest();
    // request
})

const message = {
    loading: "Идет загрузка",
    success: "Спасибо, скоро свяжемся",
    fail: "Что то пошло не так"
}


function postData(form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const messageBlock = document.createElement("div");
        messageBlock.textContent = message.loading;
        form.append(messageBlock);

        const request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader("Content-type", "application/json");
        const formData = new FormData(form);

        const object = {};

        formData.forEach((item, i) => {
            object[i] = item;
        });

        const json = JSON.stringify(object);
        request.send(json);
        request.addEventListener("load", () => {
            if (request.status === 200) {
                console.log(request.response);
                messageBlock.textContent = message.success;
            } else {
                messageBlock.textContent = message.fail;

            }
        });
    });
}