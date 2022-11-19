//  menu active 

const navbar = document.querySelector("#header")
const links = document.querySelectorAll(".link")
const arrowUp = document.querySelector("#arrow-up")

addEventListener("scroll", () => {
    
    if(scrollY > 0) {

        navbar.classList.add("active")
        arrowUp.classList.remove("hidden")

        links.forEach((element) => {
            element.classList.add("active")
        })
    }

    else {
        navbar.classList.remove("active")
        arrowUp.classList.add("hidden")
        links.forEach((element) => {
            element.classList.remove("active")
        })
    }

})

// limits of words

const elements = document.querySelectorAll('.card-text')
const limit = 175;

for (const element of elements) {
    const aboveLimit = element.textContent.length > limit
    const dotsOrEmpty = aboveLimit ? '...' : ''
    element.textContent = element.textContent.substring(0, limit) + dotsOrEmpty
}

// menu responsive

const menuMobile = document.querySelector("#menu-mobile")
const menu = document.querySelector("#menu")
const body = document.querySelector("body")
const pages = document.querySelectorAll(".item-menu .link")
const iconMenu = document.querySelector("#icon-menu")

menuMobile.addEventListener('click', () => {

    menu.classList.toggle("active")
    body.classList.toggle("active-menu")

    //change icon
    if(document.querySelector(".fa-bars")) {
        iconMenu.classList.remove("fa-bars")
        iconMenu.classList.add("fa-xmark")
    } else {
        iconMenu.classList.add("fa-bars")
        iconMenu.classList.remove("fa-xmark")
    }

    for (const page of pages) {
        page.classList.toggle("active-menu")
    }
   
})

for (const page of pages) {
    
    page.addEventListener("click", () => {

        menu.classList.toggle("active")
        body.classList.toggle("active-menu")

        if(document.querySelector(".fa-bars")) {
            iconMenu.classList.remove("fa-bars")
            iconMenu.classList.add("fa-xmark")
        } else {
            iconMenu.classList.add("fa-bars")
            iconMenu.classList.remove("fa-xmark")
        }

    })

}