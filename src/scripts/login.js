const userName = document.querySelector("#userName-login")
const password = document.querySelector("#password-login")
const checkbox = document.querySelector("#checkbox-login")
const buttonLogin = document.querySelector("#button-login")


buttonLogin.addEventListener("click", (event) =>{
    event.preventDefault()

    const userNameValue = userName.value.toLowerCase()
    const passwordValue = password.value.toLowerCase()

    if(userNameValue === "" | passwordValue === ""){
        alert("Please fill in all fields")

        return
    }

    if(userNameValue !== sessionStorage.getItem("userName") || passwordValue !== sessionStorage.getItem("password")){
        alert("Incorrect usarname or password!")

        return
    }

    alert("Acess granted!")

     window.location.href = "./home.html";

})

checkbox.addEventListener("change", () => {
    
    const type = password.getAttribute("type")

    if(type !== "password"){
        password.setAttribute("type", "password")
        return
    }

    password.setAttribute("type", "text")

})