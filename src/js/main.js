import { MainSlider, MiniSlider, VideoPlayer, Difference, Form } from "./modules";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
            container: '.page', 
            btns: '.next'
        });
    slider.render();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: 'true'
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider ({
        container: '.modules__content-slider',
        btns: '.modules__info-btns',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: 'true',
        autoPlay: 'true'
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider ({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    const difference = new Difference({
        oldOfficer: '.officerold',
        newOfficer: '.officernew',
        cards: '.officer__card-item'
    });
    difference.init();

    const form = new Form('https://server-for-training.onrender.com/api/data');
    form.init();
});