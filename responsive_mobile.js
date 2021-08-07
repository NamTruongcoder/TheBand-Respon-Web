const header = document.getElementById('header')
const menuMobile = document.getElementById('menu-mobile')
const heightHeader = header.clientHeight;
const menuItems = document.querySelectorAll('#nav li a[href*="#"]')

menuMobile.onclick = function() {
    const isClose = header.clientHeight === heightHeader;
    if (isClose) {
        header.style.height = "auto"
    } else {
        header.style.height = null
    }
}

for (const menuItem of menuItems) {
    menuItem.onclick = function(event) {
        const isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        console.log(isParentMenu)
        if (!isParentMenu) {
            header.style.height = null
        } else {
            event.preventDefault();
        }
    }
}