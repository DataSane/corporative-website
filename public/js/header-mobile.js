const btnOpenNavmob = document.querySelector('.btn-navmob');
const mobileMenu = document.querySelector('.mobile_menuHeader');

btnOpenNavmob.addEventListener('click',()=>{
    btnOpenNavmob.classList.toggle('opened');

    mobileMenu.classList.toggle('active');
})