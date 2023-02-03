//import x → X ACCEDE a esa variable de slice // window.slice aun no existe

 export default class Slice {
     constructor () {
         this.styles = document.createElement('style');
         this.styles.id="styles-slice"
         document.head.appendChild(this.styles);
         this.controller;
        }
        connectedCallback() {
            
        } 
}

customElements.define("my-slice", Slice);
window.slice= new Slice(); 

async function load(){
    //se puede mejorar utilizando reflection
    let x = await import("./controller/Controller.js");
    window.slice.controller = new x.default();
    await import ("./components/front/img-carousel/img-carousel.js");
    await import ("./components/front/SliderPro/SliderPro.js")
    await import("./components/front/Navbar/Navbar.js")
}

load();




