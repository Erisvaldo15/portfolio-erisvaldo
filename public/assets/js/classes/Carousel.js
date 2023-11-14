class Carousel {

    currentImage = 1
    maxImages = 1
    images = null
    slider = null
    timer = null
    progress = null

    constructor() {
        this.images = document.querySelectorAll('.item')
        this.slider = document.querySelector('#slider #items')
        this.progress = document.querySelectorAll('#progress li')
        this.maxImages = this.images.length 
    }

    prev() {
        
        if(this.currentImage > 1) {
            this.currentImage--
        }
 
        else {
            this.currentImage = this.maxImages
        }

        this.reloadCarousel()
    }

    next() {

        if(this.currentImage === this.maxImages) {
            this.currentImage = 1
        }

        else {
            this.currentImage++
        }
 
        this.reloadCarousel()
    }

    reloadCarousel() {

        this.progress.forEach(element => element.classList.contains('activate') ? element.classList.remove('activate') : '')

        this.progress[this.currentImage - 1].classList.add('activate')

        this.slider.style.left =`${-this.images[this.currentImage - 1].offsetLeft}px`

        clearInterval(this.timer)
        this.timer = setTimeout(() => this.next(), 5000)
    }

}

export default Carousel;