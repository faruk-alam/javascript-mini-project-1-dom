const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
const openMenu = document.querySelector('.openMenu');
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);