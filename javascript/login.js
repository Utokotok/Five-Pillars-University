
import { AccountObject } from './AccountObject.js'
import { CourseObject } from './CourseObject.js'

let hamburger = document.getElementById('hamburger-button')
let exitHamburger = document.getElementById('exit-navbar')
let navbarOptions = document.getElementById('navbar-options')
let registerAccountButton = document.getElementById('new-account-button')
let loginAccountButton = document.getElementById('login-prompt')
let inputList = document.querySelectorAll('.register-input')
let interestCategory = document.querySelectorAll('.interest-category')
let interestOutput = document.getElementById('interest-output')

let loginPrompt = document.getElementById('login-container')
let registerPrompt = document.getElementById('register-container')

let firstName = document.getElementById('first-name')
let lastName = document.getElementById('last-name')
let middleName = document.getElementById('middle-name')
let exName = document.getElementById('extension-name')
let secondaryEduc = document.getElementById('secondary-educ')
let primaryEduc = document.getElementById('primary-educ')
let secondaryYear = document.getElementById('secondary-year')
let primaryYear = document.getElementById('primary-year')
let email = document.getElementById('email')
let phoneNumber = document.getElementById('phone-number')
let password = document.getElementById('password')
let course = document.getElementById('selected-course')
let loginButton = document.getElementById('login-button')
let submitButton = document.getElementById('submit-button')
let interests = []
let usernameInput = document.getElementById('username-input')
let passwordInput = document.getElementById('password-input')

let regBut = document.getElementById('register-button');

hamburger.addEventListener('click', () => {
    navbarOptions.style.right = '0px';
})

exitHamburger.addEventListener('click', () => {
    navbarOptions.style.right = '-400px';
})

function switchToRegister(){
    regBut.textContent = 'Login'
    registerPrompt.style.left = '50%'
    registerPrompt.style.transform = 'translate(-50%, -50%)'
    loginPrompt.style.transform = 'translate(300%, 70%)'
    registerPrompt.style.opacity = '1'    
    loginPrompt.style.opacity = '0'
    isReg = !isReg
}

function switchToLogin(){
    regBut.textContent = 'Register'
    registerPrompt.style.transform = 'translate(-300%, 60%)'
    loginPrompt.style.transform = 'translate(-50%, -50%)'
    loginPrompt.style.opacity = '1'
    registerPrompt.style.opacity = '0'
    isReg = !isReg
}

let isReg = true;

regBut.addEventListener('click', () => {
    if(isReg){
        switchToLogin()
    } else{
        switchToRegister()
    }
})
        
registerAccountButton.addEventListener('click', () => {
    switchToRegister()
})

loginAccountButton.addEventListener('click', () => {
    switchToLogin()
})

submitButton.addEventListener('click', () => {
    createAccount()
})

interestCategory.forEach((element) => {
    element.addEventListener('change', () => {
        getInterestList();
    })
})

function getInterestList(){
    interests = [];
    interestCategory.forEach((e) => {
        if(e.checked){
            interests = [e.id, ...new Set(interests)]
        }
    })
    let filtered = CourseObject.filterObjects(interests)
    let filteredString = '';
    filtered.forEach((e) => {
        filteredString += e.abbreviation + ' '
    })
    
    interestOutput.textContent = filteredString
}

loginButton.addEventListener('click', () => {
    if(usernameInput.checkValidity() && passwordInput.checkValidity()){
        login()
    } else{
        window.alert('Please input valid username and password')
    }
})

function login(){
    let user = localStorage.getItem(usernameInput.value);
    if(user != null){
       user = JSON.parse(user);
       if(user.pass == passwordInput.value){
        window.location.href = `./dashboard.html?email=${usernameInput.value}`
       } else{
        window.alert('Invalid password')
       }
    } else{
        window.alert('Account does not exist')
    }
}

function createAccount(){
    let isValid = true;

    inputList.forEach((element) => {
        if(!element.checkValidity()){
            isValid = false
        }
    })

    try{
        if(!isValid) throw new Error('Invalid forms')
        if(localStorage.getItem(email.value) != null) throw new Error('Account already exists')
        if(secondaryYear.value < 1970 || secondaryEduc.value > 2025) throw new Error('Invalid year completion')    
        if(phoneNumber.value.length != 10 || !(phoneNumber.value.startsWith('9'))) throw new Error('Invalid phone number')    
        let newAccount = new AccountObject(
            firstName.value,
            lastName.value,
            middleName.value,
            (exName.value === null) ? '' : exName.value,
            secondaryEduc.value,
            primaryEduc.value,
            secondaryYear.value,
            primaryYear.value,
            email.value,
            password.value,
            phoneNumber.value,
            course.value
        )
        localStorage.setItem(email.value, JSON.stringify(newAccount))
        window.alert('Registered successfully!')
    }catch(e){
        window.alert(e.message);
    }
}