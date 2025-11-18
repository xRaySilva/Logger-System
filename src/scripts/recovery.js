const userName = document.querySelector("#userName-recovery")
const newPassword = document.querySelector("#newPassword-recovery")
const confirmPassword = document.querySelector("#confirm-recovery");

const checkbox = document.querySelector("#checkbox-recovery")
const buttonRecovery = document.querySelector("#button-recovery")

buttonRecovery.addEventListener("click", (event) =>{
    event.preventDefault()

    const userNameValue = userName.value.toLowerCase()
    const newPasswordValue = newPassword.value
    const confirmPasswordValue = confirmPassword.value

    if (!userNameValue || !newPasswordValue|| !confirmPasswordValue) {
        
      alert("Please fill in all fields");
      return;
    }

    if(userNameValue !== sessionStorage.getItem("userName") || newPasswordValue !== confirmPasswordValue){

        alert("Incorrect usarname or password!")
        return
    }

    sessionStorage.setItem("password", newPasswordValue);

    alert("Password Changed!")

    window.location.href = "./login.html";

})

checkbox.addEventListener("change", () => {
  const type = newPassword.getAttribute("type") === "password" ? "text" : "password";

  newPassword.setAttribute("type", type);
  confirmPassword.setAttribute("type", type);
});