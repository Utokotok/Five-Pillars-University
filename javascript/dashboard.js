let hamburger = document.getElementById('hamburger-button')
let exitHamburger = document.getElementById('exit-navbar')
let navbarOptions = document.getElementById('navbar-options')

let fullName = document.getElementById('full-name');
let course = document.getElementById('course')
let email = document.getElementById('email')
let number = document.getElementById('number')
let primarys = document.getElementById('primarys')
let primaryy = document.getElementById('primaryy')
let seconds = document.getElementById('seconds')
let secondy = document.getElementById('secondy')

hamburger.addEventListener('click', () => {
    navbarOptions.style.right = '0px';
})

exitHamburger.addEventListener('click', () => {
    navbarOptions.style.right = '-400px';
})

let inputEmail = new URLSearchParams(window.location.search)
inputEmail = inputEmail.get('email');

let userData = JSON.parse(localStorage.getItem(inputEmail));

console.log(userData);
fullName.textContent = `${userData.fName} ${userData.mName} ${userData.lName} ${userData.eName}`
course.textContent = userData.course
email.textContent = userData.email
number.textContent = userData.pNum
primarys.textContent = userData.pEduc
primaryy.textContent = userData.pYear
seconds.textContent = userData.sEduc
secondy.textContent = userData.sYear