import { dispatch } from "../../store";
import { saveUser } from "../../store/actions";
import { UserData } from "../../types/users";

const userInputs: UserData = {
    name: "",
}


class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const lName = this.ownerDocument.createElement('label');
        lName.textContent = "Name"
        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change", (e: any) => {
            userInputs.name = e.target.value;
        });

        const btn = this.ownerDocument.createElement('button');
        btn.textContent= "Save";
        btn.addEventListener("click", async() =>{
            console.log(userInputs);
            dispatch(await saveUser(userInputs))
        });



        this.shadowRoot?.appendChild(lName);
        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(btn);



    }
}

customElements.define('app-form', Form)

export default Form;