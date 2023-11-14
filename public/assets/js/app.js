import "../scss/main.scss";

import Carousel from "./classes/Carousel";
import Dropdown from "./classes/Dropdown";
import AboutProgress from "./classes/AboutProgress";
import Menu from "./classes/Menu";
import Email from "./classes/Email";

const carouselInstance = new Carousel();
const dropdownInstance = new Dropdown();
const aboutProgressInstance = new AboutProgress();
const menuInstance = new Menu();
const emailInstance = new Email();

window.addEventListener("DOMContentLoaded", () => {

    const itemsOfAboutMenu = document.querySelectorAll('#about-menu li')
    const aboutContent = document.querySelectorAll('#about-content > div')
    
    const skills = document.querySelector('#options')
    const skill = document.querySelectorAll('#options ul li')
    const span = document.querySelector('#dropdown span')
    const icon = span.childNodes[1]

    const navbar = document.querySelector("header");
    const links = document.querySelectorAll(".link");
    const iconMenu = document.querySelector('#icon')
    const menuMobile = document.querySelector('#menu-mobile')
    const linksFromMenuMobile = document.querySelectorAll('#menu-mobile ul li')

    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");

    const contactForm = document.querySelector('#contact form')

    prev.addEventListener("click", () => carouselInstance.prev());
    next.addEventListener("click", () => carouselInstance.next());

    setTimeout(() => carouselInstance.next(), 1000)

    dropdownInstance.toggleSkills(skills, span, icon)
    dropdownInstance.renderSkills(skill, span)

    aboutProgressInstance.activate(itemsOfAboutMenu, aboutContent)
    menuInstance.scrollEffect(navbar, links)
    menuInstance.toggleMenu(iconMenu, menuMobile)
    menuInstance.handleClickMobile(menuMobile, iconMenu, linksFromMenuMobile)

    contactForm.addEventListener('submit', event => {

        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const valuesInArray = [...formData.values()]

        const values = {
            name: valuesInArray[0],
            email: valuesInArray[1],
            _subject: valuesInArray[2],
            message: valuesInArray[3],
        }
        
        emailInstance.send(values)

        contactForm.reset()
    })

});

window.onresize = () => carouselInstance.reloadCarousel() // faz com que a cada redimensionamento de tela... o slide recomece.