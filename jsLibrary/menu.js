

const navBarMenu = document.getElementById('menuNavBar');

showNavBarMenu();
function showNavBarMenu() {
    window.addEventListener('scroll', () => {
        console.log(window.scrollY)
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
    })
}