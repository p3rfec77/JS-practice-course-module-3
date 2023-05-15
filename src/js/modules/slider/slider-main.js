import { Slider } from "./slider";

export class MainSlider extends Slider {
    constructor(btns, modulePrev, moduleNext) {
        super(btns,  modulePrev, moduleNext);
    }

    showSlides(n) {
        if(n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        if(this.hanson) {
            this.hanson.style.opacity = 0;
            if (n === 3) {
                setTimeout(() => {
                    this.hanson.style.opacity = 1;
                    this.hanson.classList.add('animated', 'slideInUp');
                }, 3000);
            }
        } 
       
       for (let slide of this.slides) {
        slide.style.display = 'none';
       }

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            })
        });

        this.moduleNext.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });

        this.modulePrev.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
            });
        });
    }

    render() {
        this.hanson = document.querySelector('.hanson');
        if(!this.btns) {
            return;
        }
       
        this.showSlides(this.slideIndex);
        this.bindTriggers();
    }
}