function required(require) {
        let required;
    
        if (require === "true") {
            required = "required "
        }   else { required = " "}
    
        return required;
        
}
    
function checked(check) {
        let checked;
    
        if (check === "true") {
            checked = "checked "
        } else { checked = " " } 
    
        return checked;
}

function handleChange(e) {
    e.target.nextSibling.value = e.target.value;
}

export {checked, required, handleChange}