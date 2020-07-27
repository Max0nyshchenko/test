 const burger = document.querySelector('.burger')
 const navbarLinks = document.querySelector('.navbar-links')
 const navbarLogo = document.querySelector('.navbar-logo')
 const myNavbar = document.getElementById('nav')

    function burgerHandler() {
        if(navbarLinks.classList.contains('show-navbar-links')) {
            navbarLinks.classList.remove('show-navbar-links')
            burger.classList.remove('clicked')
            navbarLogo.classList.remove('hide-logo')
            myNavbar.classList.remove('plus-height')
        } else {
            navbarLinks.classList.add('show-navbar-links')
            burger.classList.add('clicked')
            navbarLogo.classList.add('hide-logo')
            myNavbar.classList.add('plus-height')

        } console.log(myNavbar)
    }






