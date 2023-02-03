export default class NavBar extends HTMLElement{

    constructor(){
        
        super();
        window.slice.controller.loadTemplate("slice/templates/Navbar.html").then(template=>{
            
            window.slice.controller.toRegister(this);
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));

        })}

        connectedCallback(){
            console.log("connected")
        }
       
        
    }
    
    


window.customElements.define('nav-bar', NavBar);