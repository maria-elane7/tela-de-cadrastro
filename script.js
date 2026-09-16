
let ValidatorForm = {

    handleSubmit: (evento) => {

        evento.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll("input");

        ValidatorForm.clearErros();

        for (let i = 0; i < inputs.length; i++) {

            let input = inputs[i];

            let check = ValidatorForm.checkInput(input);

            if (check !== true) {

                send = false;

                ValidatorForm.showError(input, check);
            }
        }

        if (send) {
            form.submit();
        }
    },

    checkInput: (input) => {

        let rules = input.getAttribute("data-rules");

        if (rules !== null) {

            rules = rules.split("|");

            for (let k in rules) {

                let rDatails = rules[k].split("=");

                if (rDatails !== null) {

                    switch (rDatails[0]) {

                        case "required":

                            if (input.value == "") {
                                return "Campo não pode ser vazio";
                            }

                            break;

                        case "min":

                            if (input.value.length < rDatails[1]) {
                                return `Campo tem que ter pelo menos ${rDatails[1]} caracteres`;
                            }

                            break;

                        case "email":

                            if (input.value !== "") {

                                let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                if (!regex.test(input.value.toLowerCase())) {
                                    return "Campo de e-mail precisa ter um e-mail válido";
                                }
                            }

                            break;
                    }
                }
            }
        }

        return true;
    },

    showError(input, error) {

        input.style.borderColor = "#FF0000";

        let errorElement = document.createElement("div");

        errorElement.classList.add("error");

        errorElement.innerHTML = error;

        input.parentElement.insertBefore(
            errorElement,
            input.nextElementSibling
        );
    },

    clearErros() {

        let inputs = document.querySelectorAll("input");

        for (let i = 0; i < inputs.length; i++) {

            inputs[i].style = "";
        }

        let errorElements = document.querySelectorAll(".error");

        for (let i = 0; i < errorElements.length; i++) {

            errorElements[i].remove();
        }
    },
};

let form = document.querySelector(".validator");

form.addEventListener("submit", ValidatorForm.handleSubmit);

