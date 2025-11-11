const name = document.querySelector("#name-register")
const userName = document.querySelector("#userName-register")
const password = document.querySelector("#password-register")
const checkbox = document.querySelector("#checkbox-register")
const buttonRegister = document.querySelector("#button-register")

buttonRegister.addEventListener("click", (event) => {
    event.preventDefault()

    const nameValue = name.value.toLowerCase()
    const userNameValue = userName.value.toLowerCase()
    const passwordValue = password.value.toLowerCase()

     if(nameValue ==="" || userNameValue === "" || passwordValue === ""){
        alert("Please fill in all fields")
        return;
     }

     sessionStorage.setItem("name", nameValue)
     sessionStorage.setItem("userName", userNameValue)
     sessionStorage.setItem("password", passwordValue)

     alert("Successfully registered! You will be redirected.")
     
     window.location.href = "./login.html";
     
})

checkbox.addEventListener("change", () => {
    
    const type = password.getAttribute("type")

    if(type !== "password"){
        password.setAttribute("type", "password")
        return
    }

    password.setAttribute("type", "text")

})