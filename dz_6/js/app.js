const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                console.log(i);
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};
const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

modalTrigger.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target == modal) {
        closeModal();
    }
});

const forms = document.querySelectorAll("form");

forms.forEach((item) => {
    bindPostData(item);
});

const message = {
    loading: "Идет загрузка...",
    success: "Спасибо, скоро свяжемся!",
    fail: "Что-то пошло не так",
};

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: data,
    });
    return res;
};

function bindPostData(form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const messageBlock = document.createElement("div");
        messageBlock.textContent = message.loading;
        form.append(messageBlock);

        const formData = new FormData(form);

        const object = {};

        formData.forEach((item, i) => {
            object[i] = item;
        });

        const json = JSON.stringify(object);

        postData("server.php", json)
            .then((data) => data)
            .then((resp) => {
                console.log(resp);
                messageBlock.textContent = message.success;
            })
            .catch((e) => {
                console.error(e);
                messageBlock.textContent = message.fail;
            })
            .finally(()=>{
                setTimeout(()=>{
                    closeModal()
                },2000)
            });
    });
}