let $ = document

const openLogin = $.querySelector('.fa-user')
const closeLogin = $.querySelector('.close-login')
const menuLogin = $.querySelector('.login')
const formElem = $.querySelector('form')
const searchBoxMenu = $.querySelector('.search-box-menu')
const openSearchBoxMenu = $.querySelector('.search-two')
const closeSearchBoxMenu = $.querySelector('.close-search')
const loaderElem = $.querySelector('.loader')
const headerDownElem = $.querySelector('.header-down')
const mainImage = $.querySelector('.bookimg')
const nextImage = $.querySelector('.fa-angle-right')
const backImage = $.querySelector('.fa-angle-left')


let allImage = [
    'css/images/ghodrat zwhn.jpg',
    'css/images/dark.jpg',
    'css/images/iki.jpg'
]

let newImage = 0

function nextImageHandler () {
    newImage++
    if (newImage > allImage.length - 1) {
        newImage = 0
    }
    mainImage.setAttribute('src', allImage[newImage])
}

setInterval(function () {

    newImage++
    if (newImage > allImage.length - 1) {
        newImage = 0
    }
    mainImage.setAttribute('src', allImage[newImage])

}, 6000)


function backImageHandler () {
    newImage--
    if (newImage < 0) {
        newImage = allImage.length - 1
    }
    mainImage.setAttribute('src', allImage[newImage])
}


function loaderHandler() {
    loaderElem.classList.add('hidden')
}

function scrollHeaderHandler() {
    if (document.documentElement.scrollTop > 0) {
        headerDownElem.classList.add('scroll')
        searchBoxMenu.classList.remove('show-search')

    } else {
        headerDownElem.classList.remove('scroll')
    }
}

function openLoginHandler() {
    menuLogin.classList.toggle('active')
}

function closeLoginHandler() {
    menuLogin.classList.remove('active')
}

function submitFormHandler(event) {
    event.preventDefault()
}

function openSearchBox() {
    searchBoxMenu.classList.add('show-search')
}

function closeSearchBox() {
    searchBoxMenu.classList.remove('show-search')
}

openLogin.addEventListener('click', openLoginHandler)
closeLogin.addEventListener('click', closeLoginHandler)
formElem.addEventListener('submit', submitFormHandler)
openSearchBoxMenu.addEventListener('click', openSearchBox)
closeSearchBoxMenu.addEventListener('click', closeSearchBox)
window.addEventListener('load', loaderHandler)
window.addEventListener('scroll', scrollHeaderHandler)
nextImage.addEventListener('click' , nextImageHandler)
backImage.addEventListener('click' , backImageHandler)