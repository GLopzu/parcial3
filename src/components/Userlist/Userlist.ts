import { addObserver, appState } from "../../store";


class UserList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = "";
        appState.Users.forEach((p)=>{
            const pContainer = this.ownerDocument.createElement('article');
            const pTitle = this.ownerDocument.createElement('h3');
            pTitle.textContent = p.name;


            pContainer?.appendChild(pTitle);
            this.shadowRoot?.appendChild(pContainer);

        });
    }
}

customElements.define('users-list', UserList)


export default UserList;