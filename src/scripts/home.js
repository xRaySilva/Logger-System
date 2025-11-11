const heading = document.querySelector("#heading-home")

heading.innerHTML = `hello, ${sessionStorage.getItem("name") }`