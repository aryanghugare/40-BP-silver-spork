import "./create-session.css"
import { debounce } from "./utils/debounce";

export const setupSessionCreation = (sessionForm) => {

    console.log(sessionForm);

    sessionForm.addEventListener("input", debounce(onFormInput, 300))
    sessionForm.addEventListener("submit", createNewSession)
}

function createNewSession(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const name = formData.get("session-name");
    const duration = formData.get("duration");
    const breakDuration = formData.get("break-duration");
    const cycles = formData.get("cycles");
    console.log({ name, duration, breakDuration, cycles })
}

function showValidationForField(element) {
    const validationElement = element.closest(".fields").querySelector(".validation-msg");
    validationElement.style.display = "block";
}

function hideValidationMessageForField(element) {
    const validationElement = element.closest(".fields").querySelector(".validation-msg");
    validationElement.style.display = "none";
}

function validateForMinLength(field, value) {
    if (field.value?.length < value) {

        showValidationForField(field)
        return false
    } else {
        hideValidationMessageForField(field)
    }
    return true;
}

function validateForMinValue(field, minValue) {

    if (field.valueAsNumber < minValue) {
        showValidationForField(field);
        return false;
    } else {
        hideValidationMessageForField(field);
    }
    return true;
}

function areAllFieldsValid() {
    const allMessages = document.querySelectorAll("#create-session-form .validation-msg");
    return Array.from(allMessages, message => message.style.display)
        ?.every(value => value === "none")
}

const onFormInput = (event) => {
    const target = event.target;
    if (target.name === "session-name") {
        validateForMinLength(target, 3)
    }
    if (target.name === "duration") {
        validateForMinValue(target, 5);
    }
    if (target.name === "break-duration") {
        validateForMinValue(target, 2);
    }
    if (target.name === "cycles") {
        validateForMinValue(target, 1);
    }

    if (areAllFieldsValid()) {
        document.querySelector("#start-session").removeAttribute("disabled")
    } else {
        document.querySelector("#start-session").setAttribute("disabled")
    }

}

