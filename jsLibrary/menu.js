

const navBarMenu = document.getElementById('menuNavBar');

showNavBarMenu();
function showNavBarMenu() {
    window.addEventListener('scroll', () => {
        if (window.scrollY <= 305) {
            navBarMenu.classList.remove('fadeIn');
            navBarMenu.classList.add('fadeOut');
        }
        if (window.scrollY >= 306) {
            navBarMenu.classList.add('fadeIn');
        }
        if (window.scrollY >= 1520) {
            navBarMenu.classList.remove('fadeIn');
            navBarMenu.classList.add('fadeOut');
        }
        if (window.innerWidth <= 860) {
            navBarMenu.classList.remove('fadeIn');
            navBarMenu.classList.remove('fadeIn');
        }
    })
}
function addFadeInClassOnClick() {
    navBarMenu.classList.add('fadeIn');
}