function query(selector) {
    return document.querySelector(selector)
}

function markValid(field) {
    field.classList.remove("input-invalid")
    field.classList.add("input-valid")
}

function markInvalid(field) {
    field.classList.remove("input-valid")
    field.classList.add("input-invalid")
}

function validateInput(input) {
    return (input) !== ""
}

function validateCarInput (year, make, model) {
    return (year && make && model) !== ""
}

function validateAll () {

query("#parking-form").addEventListener("submit", function (event) {
    event.preventDefault()    

// name validation
let nameField = query("#name-field")
let nameInput = query("#name").value.trim()
let nameValid = validateInput(nameInput)

if (nameValid) {
    markValid(nameField)
} else {
    markInvalid(nameField)
}

// parking date field
let startDateField = query("#start-date-field")
let startDateInput = query("#start-date").value.trim()
let startDateValid = validateInput(startDateInput)

if (startDateValid) {
    markValid(startDateField)
} else {
    markInvalid(startDateField)
}

// number of days validation
let daysField = query("#days-field")
let daysInput = query("#days").value.trim()
let daysValid = validateInput(daysInput)

if (daysValid) {
    markValid(daysField)
} else {
    markInvalid(daysField)
}

// credit card validation
let creditCardField = query("#credit-card-field")
let creditCardInput = query("#credit-card").value.trim()
let creditCardValid = validateInput(creditCardInput)

if (creditCardValid) {
    markValid(creditCardField)
} else {
    markInvalid(creditCardField)
}

// cvv validation
let cvvField = query("#cvv-field")
let cvvInput = query("#cvv").value.trim()
let cvvValid = validateInput(cvvInput)

if (cvvValid) {
    markValid(cvvField)
} else {
    markInvalid(cvvField)
}

// expiration validation
let expirationField = query("#expiration-field")
let expirationInput = query("#expiration").value.trim()
let expirationValid = validateInput(expirationInput)

if (expirationValid) {
    markValid(expirationField)
} else {
    markInvalid(expirationField)
}

// car fields validation
let carField = query("#car-field")
let carYearInput = query("#car-year").value.trim()
let carMakeInput = query("#car-make").value.trim()
let carModelInput = query("#car-model").value.trim()
let carValid = validateCarInput(carYearInput, carMakeInput, carModelInput)

if (carValid) {
    markValid(carField)
} else {
    markInvalid(carField)
}


})
}

validateAll()
