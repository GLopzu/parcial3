import "./components/export"
import { dispatch } from "./store";
import { getUsers } from "./store/actions";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        dispatch(await getUsers())
        this.render()
    }

    render() {
        const form = this.ownerDocument.createElement('app-form');
        const pList = this.ownerDocument.createElement('users-list');
        this.shadowRoot?.appendChild(form);
        this.shadowRoot?.appendChild(pList);
    }
}

customElements.define('app-container', AppContainer)