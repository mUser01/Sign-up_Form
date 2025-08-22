const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("change", () => {
        if (!input.validity.valid) {
            input.style = "border-color: red";
        }
        if (input.validity.tooShort) {
            input.setCustomValidity(`Your ${input.name} is too short!`)
        }
    })
});

const submit = document.querySelector("button");

submit.addEventListener("click", () => {
    if (inputs[4].value !== inputs[5].value) {
        inputs[4].value = '';
        inputs[5].value = '';
        window.alert("The passwords are not the same")
    }
})