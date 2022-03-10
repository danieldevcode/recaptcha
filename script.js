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
    
    console.log(userInput)

    windownRedirection();
}

function windownRedirection(){
    window.location.assign("./success.html")
}