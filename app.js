const hamburger = document.getElementById('hamburger')
const navbar = document.querySelector('.manu')
const closeIcon = document.getElementById('close')

const changer = ()=>{
    navbar.classList.add('visible')
    hamburger.classList.add('hidden')
    closeIcon.classList.add('visible')

}

const changerTwo = ()=>{
    navbar.classList.remove('visible')
    hamburger.classList.remove('hidden')
    closeIcon.classList.remove('visible')

}


hamburger.addEventListener('click',changer)
closeIcon.addEventListener('click', changerTwo)