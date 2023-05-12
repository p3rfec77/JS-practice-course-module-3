export class Difference {
    constructor({oldOfficer, newOfficer, cards}) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldOfficerCards = this.oldOfficer.querySelectorAll(cards);
        this.newOfficerCards = this.newOfficer.querySelectorAll(cards);
        this.oldCounter = 0;
        this.newCounter = 0;

    }

    hideCards(selector) {
        selector.forEach((card, i, arr) => {
            if (i !== arr.length - 1) {
                card.style.display = 'none';
            }
        });
    }

    bindTriggers({container, cards, counter}) {
        container.querySelector('.plus').addEventListener('click', () => {
            if(counter !== cards.length - 2) {
                cards[counter].classList.add('animated', 'slideInLeft');
                cards[counter].style.display = 'flex';
                counter++
            } else {
                cards[counter].classList.add('animated', 'slideInLeft');
                cards[counter].style.display = 'flex';
                cards[cards.length - 1].style.display = 'none';
            }
        });
    }

    init() {
        this.hideCards(this.oldOfficerCards);
        this.hideCards(this.newOfficerCards);
        this.bindTriggers({
            container: this.oldOfficer,
            cards: this.oldOfficerCards,
            counter: this.oldCounter
        });

        this.bindTriggers({
            container: this.newOfficer,
            cards: this.newOfficerCards,
            counter: this.newCounter
        });

    } 
}