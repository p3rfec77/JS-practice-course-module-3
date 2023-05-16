export class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = './src/assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const link = document.createElement('a');
        link.setAttribute('href', path);
        link.setAttribute('download', 'nice-pic');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    init() {
        this.btns.forEach(btn => {
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', (e) => {
                this.downloadItem(this.path);
            });
        });
    }
}