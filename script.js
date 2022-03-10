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
    if(captchaResponse.length != 0)
        windowRedirection("./success.html");
    else
        windowRedirection("./index.html");
}

function windowRedirection(page){
    window.location.assign(page)
}
