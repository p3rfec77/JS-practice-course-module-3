export class Form {
    constructor(url) {
        this.forms = document.querySelectorAll('form');
        this.inputs = document.querySelectorAll('input');
        this.path = url;
        this.message = {
            loading: 'loading...',
            success: "Thank you! we'll call you soon",
            failure: 'Something went wrong...'
        };
    }

    clearInputs() {
        this.inputs.forEach(input => {
            input.value = '';
        });
    }

    checkMailInputs() {
        const mailInputs = document.querySelectorAll('[type = "email"]');
        mailInputs.forEach(mailinput => {
            mailinput.addEventListener('keypress', (e) => {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        })
    }

    async postData (url, data) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        return await response.text();
    }

    init() {
        this.checkMailInputs();
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                margin-top: 15px;
                font-size: 18px;
                color: red;
                `;
                form.parentNode.append(statusMessage);
                
                statusMessage.textContent = this.message.loading;

                const formData = new FormData(form);
                const data = {};
                formData.forEach((value, key) => data[key] = value);

                this.postData(this.path, data)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = this.message.success;
                })

                .catch(() => {
                    statusMessage.textContent = this.message.failure;
                })
                .finally(() => {
                    this.clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
            });
        });
    }
};