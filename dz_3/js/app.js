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


