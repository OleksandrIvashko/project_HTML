// tab
const tabContent = document.querySelectorAll(".example-tab-content");
const tab = document.querySelectorAll(".example-tab-element");
const tabNav = document.querySelector(".example-tab-nav");
const order = document.querySelector(".j-order");

function activeTab (e) {
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("j-active");
        tabContent[i].classList.remove("j-show");
    }
    const _tabContent = document.querySelector(this.getAttribute("data-section"));
    if (_tabContent) {
        this.classList.add("j-active");
        _tabContent.classList.add("j-show");
    }
};

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", activeTab);
};

// header
const header = document.querySelector(".j-header");

function scrollHeader () {
    if (window.scrollY > 0) {
        header.classList.add("b-white");
    } else {
        header.classList.remove("b-white");
    }
};

window.addEventListener("scroll", scrollHeader);

// order
const maxDeg = 35;
const example = document.getElementById('example');
function scrollOrder () {
    const rotate = (maxDeg / example.offsetTop) * window.scrollY;
    const scale = (.5 / example.offsetTop) * window.scrollY;
    const deg = (maxDeg + rotate) * 1.2;

    if (window.scrollY >= example.offsetTop - 20) {
        order.style.transform = `rotate(${deg}deg) scale(${0})`;
    } else {
        order.style.transform = `rotate(${deg}deg) scale(${1 - scale})`;
    }
};

window.addEventListener("scroll", scrollOrder);


// menu b-header-right-show
const btnMenu = document.querySelector(".header-btn");
const contentNav = document.querySelector(".j-header-menu");

function openMenu () {
    if (btnMenu.classList.contains("open")) {
        btnMenu.classList.remove("open");
        contentNav.classList.remove("b-header-right-show");
    } else {
        btnMenu.classList.add("open");
        contentNav.classList.add("b-header-right-show");
    }
};

btnMenu.addEventListener("click", openMenu);

//advantages
const advantages = document.getElementById("advantages");
const animationAdvantages = document.querySelectorAll(".j-advantages-block");

function scrollAdvantages () {
    if (window.scrollY >= advantages.offsetTop - advantages.offsetHeight - 50) {
        for (let i = 0; i < animationAdvantages.length; i++) {
            animationAdvantages[i].classList.add("b-advantages-block");
        }
    } else {
        for (let i = 0; i < animationAdvantages.length; i++) {
            animationAdvantages[i].classList.remove("b-advantages-block");
        }
    }
};

for (let i = 0; i < animationAdvantages.length; i++) {
    window.addEventListener("scroll", scrollAdvantages);
};

// process img
const processImg = document.querySelector(".j-process-img");
const processId = document.getElementById("process");

function scrollProcess () {
    if (window.scrollY >= processId.offsetTop - 100) {
        processImg.classList.add("b-process-img");
    } else {
        processImg.classList.remove("b-process-img");
    }
};

window.addEventListener("scroll", scrollProcess);