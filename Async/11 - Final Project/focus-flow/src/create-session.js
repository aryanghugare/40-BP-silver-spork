// Create a Study Session(Form with validation)
// Session name(required, min 3 characters)
// Study duration in minutes(number input, required, min 5)
// Break duration in minutes(number input, required, min 2)
// Number of study cycles(number input, required, min 1)

// Behavior:

// Show real - time validation errors below each field
// “Start Session” button remains disabled until all fields are valid

import "./create-session.css"

export const setupSessionCreation = (sessionForm) => {

    console.log(sessionForm);

}

const onFormInput = (event) => {
    console.log(event)
}

