let account = {
    username: "Daniel",
    password: "superadmin"
}

let userInput = {
    username: "",
    password: ""
}

function login(){
    userInput.username = document.querySelector("#username").value
    userInput.password = document.querySelector("#password").value
    
    let captchaResponse = grecaptcha.getResponse()
    if(captchaResponse.length != 0 && userValidation(userInput, account))
        windowRedirection("./success.html");
    else
        windowRedirection("./index.html");
}

function userValidation(userInput, account){
    if(userInput.username == account.username && userInput.password == account.password)
        return true;
    else
        return false;
}

function windowRedirection(page){
    window.location.assign(page)
}
