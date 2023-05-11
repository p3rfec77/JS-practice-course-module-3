export class Slider {
    constructor({
        container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '-',
        animate,
        autoPlay} = {}) {

        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoPlay = autoPlay;
        this.slideIndex = 1;
    }

}