// class for anything type of progress (feature) on system.

class AboutProgress {
    activate(menuElements, contentElements) {
        menuElements.forEach((element, index) => {
            element.addEventListener("click", () => {
                element.classList.add("current");
                contentElements[index].classList.add("current");
                this.#updateMenu(menuElements, index);
                this.#updateContent(contentElements, index);
            });
        });
    }

    #updateMenu(menuElements, currentIndex) {
        let foundElementWithSameClass = Array.from(menuElements).find(
            (element, index) =>
                element.classList.contains("current") && index !== currentIndex
        );

        if (foundElementWithSameClass) {
            foundElementWithSameClass.classList.remove("current");
        }
    }

    #updateContent(contentElements, currentIndex) {
        let foundElementWithSameClass = Array.from(contentElements).find(
            (element, index) =>
                element.classList.contains("current") && index !== currentIndex
        );

        if (foundElementWithSameClass) {
            foundElementWithSameClass.classList.remove("current");
        }
    }
}

export default AboutProgress;