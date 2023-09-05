const sectionDivRegister = document.querySelector('.section-form-register')
const formEl = document.querySelector('#form')
const usernameInput = document.getElementById('username')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const passwordInput = document.getElementById('password')
const repaswwordInput = document.getElementById('repassword')
const CheckkImg = document.querySelector('.register-checked')
const CheckLogin = document.querySelector('.login-checked')
const passedLogin = document.querySelector('.login-passed')
let RegisterData = []


const FormSinging = document.querySelector('.section-form-login')
const SignEmail = document.getElementById('email-sign')
const SignPassword = document.getElementById('password-sign')



function ShowError(input, message = "xeta bash verdi") {
    input.className += " is-invalid"
    const divEl = input.nextElementSibling
    divEl.innerText = message
    divEl.className = 'invalid-feedback'
}
function ShowSucces(input) {
    input.className = 'form-control is-valid'
}


function CheckLength(name) {
    if (name.value.length < 4) {
        ShowError(name, "NAME MUST BE FROM AT LEAST 4 LETTERS")
    }
    else if (name.value.length >= 20) {
        ShowError(name, "name cannot be greater than 20 letters")
    }
    else {
        ShowSucces(name)
    }
}
usernameInput.addEventListener('input', function () {
    CheckLength(usernameInput)
})
passwordInput.addEventListener('input', function () {
    CheckLength(passwordInput)
})


function CheckEmail(email) {
    const regularExpresions = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regularExpresions.test(email.value.trim())) {
        ShowSucces(email)
    }
    else {
        ShowError(email, "Please enter a valid email address")
    }
}
emailInput.addEventListener("input", function () {
    CheckEmail(emailInput)
})


function CheckPhone(phoneNumber) {
    const phoneRegularExpresions = /^\+?(\d{1,3})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{5})$/

    if (phoneRegularExpresions.test(phoneNumber.value.trim())) {
        ShowSucces(phoneNumber)
    }
    else {
        ShowError(phoneNumber, "enter the number properly")
    }
}
phoneInput.addEventListener("input", function () {
    CheckPhone(phoneInput)
})


function Checkpassword(password1, repassword2) {
    if (password1.value === repassword2.value) {
        ShowSucces(password1)
        ShowSucces(repassword2)
    }
    else {
        ShowError(repassword2, 'repassword donT confirm')
    }
}
repaswwordInput.addEventListener('input', function () {
    Checkpassword(passwordInput, repaswwordInput)
})



function CheckRequired(inputlar) {
    inputlar.forEach(function (birInput) {
        if (birInput.value === '') {
            ShowError(birInput, `${birInput.id} Important is given `)
        }
        else {
            ShowSucces(birInput)
        }
    })
}


formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    CheckRequired([usernameInput, emailInput, phoneInput, passwordInput, repaswwordInput])
    Checkpassword(passwordInput, repaswwordInput);
    CheckLength(usernameInput)
    CheckLength(passwordInput)
    CheckEmail(emailInput)
    CheckPhone(phoneInput)
    const inputs = [usernameInput, emailInput, phoneInput, passwordInput, repaswwordInput];
    let allValid = true;

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];

        if (input.classList.contains('is-invalid')) {
            allValid = false;
            break;
        }
    }

    if (allValid) {
        RegisterData.push(emailInput.value + ':' + passwordInput.value)
        localStorage.setItem('RegisterData', JSON.stringify(RegisterData))

        sectionDivRegister.style.display = 'none'
        CheckkImg.style.width = '100%'
        CheckkImg.style.overflow = 'auto';
        setTimeout(() => {
            CheckkImg.style.display = 'none'
            document.querySelector('.section-form-login').style.display = 'block'
        }, 3000);
    }
});

FormSinging.addEventListener('submit', function (e) {
    e.preventDefault()
    const LoginData = SignEmail.value + ':' + SignPassword.value

    const LoginStore = localStorage.getItem('RegisterData')
    const RegisterData2 = LoginStore ? JSON.parse(LoginStore) : []

    if (RegisterData2.includes(LoginData)) {
        CheckLogin.style.width = '100%'
        CheckLogin.style.overflow = 'auto';
        document.querySelector('.section-form-login').style.display = 'none'
    }
    else {
        passedLogin.style.width = '100%'
        passedLogin.style.overflow = 'auto';
        document.querySelector('.section-form-login').style.display = 'none'
        setTimeout(() => {
            passedLogin.style.width = '0%'
            passedLogin.style.overflow = 'hidden';
            document.querySelector('.section-form-login').style.display = 'block'
        }, 3000);
    }
})


