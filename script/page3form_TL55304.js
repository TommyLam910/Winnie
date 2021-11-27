function runValidate(form){

    if(validateName(form) && validateEmail(form) && validateYesNO(form) && validateAction(form)){
        return true;
    }
    else
        return false;
}

function validateName(form){
    var iname = form.elements["username"];

    if(iname.validity.valueMissing){
        iname.setCustomValidity("Please enter your name");
        return false;
    }
    else{
        iname.setCustomValidity("");
        return true;
    }
}

function validateEmail(form){
    var email = form.elements["Email"];
    var value1 = form.elements["Email"].value;

    if(email.validity.valueMissing){
        email.setCustomValidity("Please enter your email address");
        return false;
    }
    else if(email.validity.typeMismatch){
        email.setCustomValidity("Email " + value1 + " is not in a correct format");
        return false;
    }
    else{
        email.setCustomValidity("");
        return true;
    }

}

function validateYesNO(form){
    var yesNO = document.querySelectorAll("#YN1");
    var checkpoint = false;

    for(let i = 0; i < yesNO.length; i++){
        if(yesNO[i].checked){
            checkpoint = true;
            break;
        }
    }
    if(!checkpoint)
       yesNO[0].setCustomValidity("Please select either yes or no");
    else
       yesNO[0].setCustomValidity("");
    return checkpoint;
}



function validateAction(form){
    var action = form.elements["comment"];

    if(action.validity.valueMissing){
        action.setCustomValidity("Please feel free to let us know if you have any concenrs");
        return false;
    }
    else{
        action.setCustomValidity("");
        return true;
    }
}