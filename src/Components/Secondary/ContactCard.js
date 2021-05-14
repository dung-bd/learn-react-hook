import React from "react"

function ContactCard(props){

    return(
        <div className="Contact-card">
        <h1>{props.contact.name}</h1>
        <h2>Phone: {props.contact.phone}</h2>
        </div>
    )
}
//ReactDOM.render(<ContactCard />, document.getElementById("root"));
export default ContactCard