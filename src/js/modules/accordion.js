export class Accordion {
    constructor(headersSelector, contentSelector) {
        this.headers = document.querySelectorAll(headersSelector);
        this.content = document.querySelectorAll(contentSelector);
    };

    init() {
        this.headers.forEach((header, i) => {
            header.addEventListener('click', (e) => {
                this.content[i].classList.toggle('msg');
                this.content[i].classList.add('animated', 'zoomIn');
                this.content[i].style.marginTop = '20px';
            });
        });
    }
}