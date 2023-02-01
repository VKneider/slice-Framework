import Controller from "./controller/Controller.js";

export default class Slice {
    constructor () {
        this.styles = document.createElement('style');
        document.head.appendChild(this.styles);
        this.controller= new Controller();

        let templatesContainer = document.createElement("div");
        templatesContainer.id = "templates-container";
        document.head.appendChild(templatesContainer);
    }

    connectedCallback() {
    }


}

customElements.define("my-slice", Slice);
window.slice= new Slice();
