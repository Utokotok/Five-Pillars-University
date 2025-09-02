let navbarOptions = document.getElementById('navbar-options')
let navbarContainer = document.getElementsByClassName('navbar-container')[0]
let hamburger = document.getElementById('hamburger-button')
let exitHamburger = document.getElementById('exit-navbar')
let header = document.getElementsByClassName('page-header')[0]
let headerLogo = document.getElementsByClassName('logo-border')[0]
let headerMask = document.getElementsByClassName('header-mask')[0]
let pageContent = document.getElementById('page-content');

let toShow = document.querySelectorAll('.to-show')

let pageHeader = document.getElementById('page-header')
let pageFooter = document.getElementById('page-footer')

const observer = new IntersectionObserver((elements) => {
    elements.forEach((e) => {
        if(e.isIntersecting){
            e.target.classList.add('active-to-show')
        } else{
            e.target.classList.remove('active-to-show')
        }
    })
}, {
    rootMargin: "-300px 0px -200px 0px"
})

toShow.forEach((e) => observer.observe(e))

hamburger.addEventListener('click', () => {
    navbarOptions.style.right = '0px';
})

exitHamburger.addEventListener('click', () => {
    navbarOptions.style.right = '-400px';
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 80){
        minimizeHeader()
    } else{
        showHeader();
    }
})

function minimizeHeader(){
    header.classList.add('minimized-page-header')
    navbarContainer.classList.add('active-navbar')
}

function showHeader(){
    header.classList.remove('minimized-page-header')
    navbarContainer.classList.remove('active-navbar')
}

