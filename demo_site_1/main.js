/* const header = document.querySelector("[data-header]");
const observer = new IntersectionObserver(entry => {
    const element = entry[0]

    header.classList.toggle("fixed-header", !element.isIntersecting)

    const logo = document.querySelector("[data-main-logo]")

    /* if (element.isIntersecting) {
        logo.setAttribute("src", "logo-color.png")
    } else {
        logo.setAttribute("src", "logo.png")
    }

    console.log(element)

}, {
    threshold: 0,
})

observer.observe(document.querySelector("[data-page-top]")); */

const menu = document.querySelector("[data-navigation]");
const menuList = document.querySelectorAll("[data-menu-opt]");

document.querySelector("[data-open-menu]").addEventListener("click", () => {
    menu.classList.add("show-menu");
});

document.querySelector("[data-close-menu]").addEventListener("click", () => {
   hideMenu(); 
});

const hideMenu = () => {
    menu.classList.remove("show-menu");
};



menuList.forEach(element => {
    element.addEventListener("click", hideMenu);
});