class Menu {

    scrollEffect(navbar, links, scrollThreshold = 0) {
        function updateActivation() {
            const isScrolled = window.scrollY > scrollThreshold;
    
            navbar.classList.toggle("activate", isScrolled);
            links.forEach((element) => {
                element.classList.toggle("activate", isScrolled);
            });
        }
    
        updateActivation();
        addEventListener("scroll", updateActivation);
    }

    toggleMenu(iconMenu, menu) {

        iconMenu.addEventListener('click', () => {
            iconMenu.classList.toggle('activate')
            menu.classList.toggle('activate')
        })

    }

    handleClickMobile(menuMobile, iconMenu, linksFromMenuMobile) {

        linksFromMenuMobile.forEach((link) => {

            link.addEventListener('click', () => {
                menuMobile.classList.toggle('activate')
                iconMenu.classList.toggle('activate')
            })

        })

    }
}

export default Menu