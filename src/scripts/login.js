const username = document.querySelector("#username-login")
const password = document.querySelector("#password-login")
const checkbox = document.querySelector("#checkbox-login")
const buttonLogin = document.querySelector("#button-login")


buttonLogin.addEventListener("click", (event) =>{

    const usernameValue = username.value.toLowerCase()
    const passwordValue = password.value.toLowerCase()


    if(usernameValue === "" | passwordValue === ""){
        event.preventDefault()
        alert("Please fill in all fields")

        return
    }

    if(usernameValue !== "digitalcollege" || passwordValue !== "123456789"){
        event.preventDefault()
        alert("Incorrect usarname or password!")

        return
    }

    alert("Acess granted!")
})

checkbox.addEventListener("change", () => {
    
})