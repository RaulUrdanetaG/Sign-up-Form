const errorDisplayers = document.querySelectorAll('.error'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    passwordConfirm = document.getElementById('password-confirm'),
    inputFields = document.querySelectorAll('input'),
    phone = document.getElementById('tel-number'),
    submitBtn = document.getElementById('submit-button');

let count = 2;
const inputs = [...inputFields];

function onValidation(current, messageString, booleanTest) {
    let message = current
    message.textContent = messageString
    booleanTest != 0 ? ++count : count
}

for(let i=0; i<inputFields.length; i++){
    let currentInputField = inputFields[i]
    let currentErrorDisplayer = errorDisplayers[i]

    currentInputField.addEventListener('keyup', (e)=>{
        let message = currentErrorDisplayer
        e.target.value != "" ? onValidation(currentErrorDisplayer, '', 0) : onValidation(currentErrorDisplayer, 'This field is Required *', 0)
    })
}

phone.addEventListener('keyup', (e)=>{
    let message = errorDisplayers[3]
    e.target.value == e.target.value.replace(/\D/g,'') ? onValidation(message, '', 1) : onValidation(message, '*Please enter valid number', 0)
})

email.addEventListener('keyup', (e) => {
    let message = errorDisplayers[2]
    email.value.includes('@') & email.value.includes('.com') ? onValidation(message, '', 1) : onValidation(message, 'Please provide a valid Email *', 0)
})

password.addEventListener('keyup', (e) => {
    let message = errorDisplayers[4]
    password.value.length >= 8 ? onValidation(message, '', 1) : onValidation(message, 'Password requires minimum 8 charecters *', 0)
})

passwordConfirm.addEventListener('keyup', (e) => {
    let message = errorDisplayers[5]
    password.value === e.target.value ? onValidation(message, '', 1) : onValidation(message, 'Password did not match *', 0)
})

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(count > 5){
        cardContainer.style.display = 'none'
        outroOverlay.classList.remove('disabled')
    }
    else{
        for(let i=0; i<errorDisplayers.length; i++){
            errorDisplayers[i].textContent = '*This field is Required'
        }
    }
})
