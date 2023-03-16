function classToggle() {
    const navs = document.querySelectorAll('.nav-toggle')
    
    navs.forEach(nav => nav.classList.toggle('nav-toggle-show'));
}

document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);