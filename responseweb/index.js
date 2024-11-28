const monile_nav =  document.querySelector('.mobil_navbar_btn')
const nav_header = document.querySelector('.header')

const toggleNavbar = ()=>{
    nav_header.classList.toggle('active');
    // console.log('hii')
}
// console.log(toggleNavbar)
monile_nav.addEventListener('click', toggleNavbar)