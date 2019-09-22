function query(selector) {
    return document.querySelector(selector)
}

function querys(selector) {
    return document.querySelectorAll(selector)
}

function removeErrorMsg() {
    let existingError = querys(".input-hint")
    for (let instance of existingError) {
        instance.remove("error-message")
    }
}

function markValid(field) {
    field.classList.remove("input-invalid")
    field.classList.add("input-valid")
}

function markInvalid(field, errorMsg) {
    field.classList.remove("input-valid")
    field.classList.add("input-invalid")

    const errorField = document.createElement("p")
    errorField.classList.add("input-hint", "text-danger", "error-message")
    errorField.innerText = errorMsg
    field.appendChild(errorField)
}

function validateInput(input) {
    return (input) !== ""
}


function validateCarInput(year, make, model) {
    return (year && make && model) !== ""
}

function retrieveDate(rawDate) {
    if (rawDate === "") {
        return null
    } else {
        return new Date(rawDate)
    }
}

function verifyFutureDate(convertedDate) {
    let now = new Date()
    now.setUTCHours(0, 0, 0, 0)
    return convertedDate >= now
}

function validateAll() {

    query("#parking-form").addEventListener("submit", function (event) {
        event.preventDefault()

        removeErrorMsg()

        // name validation
        let nameField = query("#name-field")
        let nameInput = query("#name").value.trim()
        let nameValid = validateInput(nameInput)

        if (nameValid) {
            markValid(nameField)
        } else {
            markInvalid(nameField, "Name is required")
        }

        // parking date field
        let startDateField = query("#start-date-field")
        let startDateInput = query("#start-date").value.trim()
        let startDateValid = validateInput(startDateInput)

        let convertedDate = retrieveDate(startDateInput)

        let validFutureDate = verifyFutureDate(convertedDate)

        if (!startDateValid) {
            markInvalid(startDateField, "Start date is required.")
        } else if (!validFutureDate) {
            markInvalid(startDateField, "Start date must be in the future.")
        } else {
            markValid(startDateField)
        }

        // number of days validation
        let daysField = query("#days-field")
        let daysInput = query("#days").value.trim()
        let daysValid = validateInput(daysInput)

        if (isNaN(daysInput) && daysInput !== "") {
            markInvalid(daysField, "Please enter a valid number.")
        } else if (daysInput < 1 && daysInput !== "") {
            markInvalid(daysField, "Must park for at least 1 day.")
        } else if (daysInput > 30 && daysInput !== "") {
            markInvalid(daysField, "You can't park here for more than 30 days.")
        } else if (daysValid) {
            markValid(daysField)
        } else {
            markInvalid(daysField, "Number of days is required.")
        }

        // credit card validation
        let creditCardField = query("#credit-card-field")
        let creditCardInput = query("#credit-card").value.trim()
        let creditCardValid = validateInput(creditCardInput)

        if (creditCardValid) {
            markValid(creditCardField)
        } else {
            markInvalid(creditCardField, "Credit card number is required.")
        }

        // cvv validation
        let cvvField = query("#cvv-field")
        let cvvInput = query("#cvv").value.trim()
        let cvvValid = validateInput(cvvInput)

        if (isNaN(cvvInput) && cvvInput !== "") {
            markInvalid(cvvField, "Enter a valid 3-digit number.")
        } else if (cvvInput.length !== 3) {
            markInvalid(cvvField, "Enter a valid 3-digit number.")
        } else if (cvvValid) {
            markValid(cvvField)
        } else {
            markInvalid(cvvField, "CVV is required.")
        }

        // expiration validation
        let expirationField = query("#expiration-field")
        let expirationInput = query("#expiration").value.trim()
        let expirationValid = validateInput(expirationInput)



        if (expirationValid) {
            markValid(expirationField)
        } else {
            markInvalid(expirationField, "Expiration date is required.")
        }

        // car fields validation
        let carField = query("#car-field")
        let carYearInput = query("#car-year").value.trim()
        let carMakeInput = query("#car-make").value.trim()
        let carModelInput = query("#car-model").value.trim()
        let carValid = validateCarInput(carYearInput, carMakeInput, carModelInput)

        if (isNaN(carYearInput) && carYearInput !== "") {
            markInvalid(carField, "That's not a year.")
        } else if (carYearInput <= 1900 && carYearInput !== "") {
            markInvalid(carField, "Cars are not that old.")
        } else if (carYearInput > 2019 && carYearInput !== "") {
            markInvalid(carField, "You can't park a car from the future.")
        } else if (!carValid) {
            markInvalid(carField, "Car year, make, and model are all required.")
        } else {
            markValid(carField)
        }

        function isWeekend(startDateInput, daysInput) {

            for (let day = 0; day < daysInput; day++) {

                let parkingArrays = []

                parkingArrays.push(new Date(convertedDate));

                convertedDate.setDate(convertedDate.getDate() + 1);

                let parkingDates = (parkingArrays[0])

                let daysOfTheWeek = []

                daysOfTheWeek.push(parkingDates.getDay())

                let rawDaysOfTheWeek = []

                rawDaysOfTheWeek.push((daysOfTheWeek[0]))

                let dayRate = []

                for (let day of rawDaysOfTheWeek) {
                    if (day === 0 || day === 6) {
                        dayRate.push(rawDaysOfTheWeek = 7)
                    }
                    else {
                        dayRate.push(rawDaysOfTheWeek = 5)
                    }
                }

                console.log(dayRate)

                // console.log(dayRate)

                // dayRateSum = function (dayRate) {
                //     return dayRate.reduce(function (a,b) {
                //         return a+b
                //     }, 0);
                // }
            }
        }

        isWeekend(startDateInput, daysInput)


        // function validateCardNum(number) {
        //     let regex = new RegExp("^[0-9]{16}$");
        //     if (!regex.test(number))
        //         return false

        // return luhnCheck(number);
        // }
        // function luhnCheck(val) {
        //     let sum = 0
        //     for (let i = 0; i < val.length; i++) {
        //         let intVal = parseInt(val.substr(i,1));
        //         if (i % 2 === 0) {
        //             intVal *=2;
        //             if (intVal>9) {
        //                 intVal = 1 + (intVal % 10);
        //             }
        //         } 
        //         sum += intVal;
        //     }
        //     return (sum % 10) === 0;
        // }
        // validateCardNum(creditCardInput)
    })
}

validateAll()


// get each day between now and the end of the number of days field into an array


// let parkingDates = []

// parkingDates.push(convertedDate)

// console.log(parkingDates)

// calculateTotal(startDateInput, daysInput)

// create a new div that will display the total

// multiply total number of days by 5 and add that to the total

// loop over the array to see how many days start with the letter "S"

// multiply the total number of "S" days by 2 and add that to the total

// appendChild to get that total on the screen with a dollar sign

