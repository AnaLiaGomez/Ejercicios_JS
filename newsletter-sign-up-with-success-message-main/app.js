const labelEmail = document.getElementById("validation"); //no cambia de valor una vez seleccionada
const inputEmail = document.getElementById("email");

inputEmail.addEventListener("keyup", () => {
    if (!validarEmail(inputEmail.value)) {
    inputEmail.classList.remove("accepted-validation-input");
    inputEmail.classList.add("no-accepted-validation-input");

    labelEmail.classList.remove("accepted-validation-label");
    labelEmail.classList.add("no-accepted-validation-label");

    labelEmail.innerHTML = "Valid email required";
    } else {
    inputEmail.classList.remove("no-accepted-validation-input");
    inputEmail.classList.add("accepted-validation-input");

    labelEmail.classList.remove("no-accepted-validation-label");
    labelEmail.classList.add("accepted-validation-label");
    labelEmail.innerHTML = "";
    }
});
    document.getElementById('btn-enviar').addEventListener('click', function() {
    document.getElementById('elementoOculto').style.display = 'block';
});
function validarEmail(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
}

