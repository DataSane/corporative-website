const btnOpenNavmob = document.querySelector('.btn-navmob');
const mobileNavbar = document.querySelector('.nav-bar');

btnOpenNavmob.addEventListener('click',()=>{
    btnOpenNavmob.classList.toggle('opened');

    mobileNavbar.classList.toggle('active');

    if(btnOpenNavmob.classList.contains('opened')){
        btnOpenNavmob.textContent = 'X';
    }else{
        btnOpenNavmob.textContent = 'O';
    }
})