export default class Controller {
    constructor () {
        this.components = new Map();
    }

    toRegister (component) {
        this.components.set(component);
    }

    getInstance(id){
        return this.components.get(id);
    }

    async loadTemplate (template) {
        let container = document.getElementById("templates-container");
        let xhr = new XMLHttpRequest();
        xhr.open('GET', template, true);
        xhr.onload = function () {
            if (this.status === 200) {
            container.appendchild(this.responseText);
            }
        };
    xhr.send();
}

}

//function to load html template to the DOM


