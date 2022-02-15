const menuBtn = document.querySelector('.header .nav-bar .nav-list .menu-btn');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        mobile_menu.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        mobile_menu.classList.remove('open');
        menuOpen = false;
    }
});

menu_item.forEach(item=> {
    item.addEventListener('click',()=>{
        if(!menuOpen) {
            menuBtn.classList.add('open');
            mobile_menu.classList.add('open');
            menu_item = true;
            
        } else {
            menuBtn.classList.remove('open');
            mobile_menu.classList.remove('open');
            menu_item = false;
        }
    });
});