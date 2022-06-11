
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const message = document.createElement("div");
const btn = document.getElementById("btn");

let insertAfter = function(newNode, existingNode){
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

let removeAfter = function(removeNode, existingNode){
    existingNode.parentNode.removeChild(removeNode);
};

let check = function(){
    if (password.value != passwordConfirm.value){
        message.style.color = "red";
        message.style.fontSize = "10px"
        message.textContent = "*Passwords do not match"
        password.classList.add("error");
        passwordConfirm.classList.add("error");
        password.style.border = "1px solid red";
        passwordConfirm.style.border = "1px solid red";
        insertAfter(message, password);
    } else {
        password.classList.remove("error");
        passwordConfirm.classList.remove("error");
        password.style.removeProperty("border");
        passwordConfirm.style.removeProperty("border");
        removeAfter(message, password);
    }
};

btn.addEventListener("click", ()=> {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});





