// get data
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");



// validate data
function validateForm(){
    clearMessages();

    console.log(765)
    if(firstName.value.length < 1) {
        errorNodes[0].innerText = "Firstname cannot be blank";
        firstName.classList.add("error-border");
    }
    if(lastName.value.length < 1) {
        errorNodes[1].innerText = "lastname cannot be blank";
        lastName.classList.add("error-border");
    }
    if(email.value.length < 1) {
        errorNodes[2].innerText = "email cannot be blank";
        email.classList.add("error-border");
    }
    if(message.value.length < 1) {
        errorNodes[3].innerText = "message cannot be blank";
        message.classList.add("error-border");
    }
}

//clear error/success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText= "";
    }
    firstName.classList.remove("error-border");
    lastName.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}