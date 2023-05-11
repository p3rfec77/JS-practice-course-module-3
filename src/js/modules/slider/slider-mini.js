import { Slider } from "./slider";

export class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoPlay) {
        super(container, next, prev, activeClass, animate, autoPlay);
    }

    decorizeSlides() {
        for (let slide of this.slides) {
            slide.classList.remove(this.activeClass);
            if(this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        };

        this.slides[0].classList.add(this.activeClass);
        if(this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        if(this.slides[1].nodeName === 'BUTTON') {
            const btns = document.querySelectorAll('.feed__slider button');
            btns.forEach(btn => {
                this.container.append(btn);
            })
        }
        this.container.append(this.slides[0]);
        this.decorizeSlides();
    }

    bindTriggers() {
        if(this.next) {
            this.next.addEventListener('click', () => this.nextSlide());
        }

        if(this.prev) {
            this.prev.addEventListener('click', () => {
                
                if(this.slides[this.slides.length - 1].nodeName === 'BUTTON') {
                    const active = this.slides[this.slides.length - 3];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorizeSlides();
                } 
            });
        }
    }

    activateSlider() {
        this.paused = setInterval(() => this.nextSlide(), 5000);
    };

    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
        `;

        this.bindTriggers();
        this.decorizeSlides();

        this.paused;
        
        if (this.autoPlay) {
            this.activateSlider();
            this.btns.forEach(btnBox => {
                btnBox.addEventListener('mouseenter', () => clearInterval(this.paused));
                btnBox.addEventListener('mouseleave', () => this.activateSlider());
            });

            this.container.addEventListener('mouseenter', () => clearInterval(this.paused));
            this.container.addEventListener('mouseleave', () => this.activateSlider());
        }
    }
};