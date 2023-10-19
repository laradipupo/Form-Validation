// get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");



// validate data
function validateForm(){
    // clearMessages();


    if(nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }
}

// clear error/success messages
// function clearMessages(){
//     for(let i = 0 < errorNodes.length; i++;){
//         errorNodes[i].innerText= "";
//     }
//     nameInput.classList.remove("error-border");
// }