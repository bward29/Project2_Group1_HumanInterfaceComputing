(function() {
    const bulletLists = document.querySelectorAll('body > ul, header > ul, .container > ul, body > li, header > li, .container > li');
    bulletLists.forEach(list => {
        list.style.display = 'none';
    });
})();


document.addEventListener('DOMContentLoaded', function() {
    
    const navbars = document.querySelectorAll('.navbar-container, .navbar, .mobile-menu');
    navbars.forEach(nav => {
        nav.style.display = 'none';
    });

    
    const bulletLists = document.querySelectorAll('body > ul, header > ul, .container > ul, body > li, header > li, .container > li');
    bulletLists.forEach(list => {
        list.style.display = 'none';
    });

    
    const hamburger = document.querySelector('.hamburger-menu');
    if (hamburger) {
        hamburger.style.display = 'block';
    }

   
    const menuItems = document.querySelectorAll('.dropdown-menu li');
    menuItems.forEach((item, index) => {
        item.style.transitionDelay = (index * 0.05) + 's';
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
    });
    
  
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu) {
        dropdownMenu.addEventListener('animationend', function() {
            if (this.classList.contains('show')) {
                menuItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 50);
                });
            } else {
                menuItems.forEach(item => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-10px)';
                });
            }
        });
    }
});


function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (dropdownMenu && hamburgerMenu) {
        dropdownMenu.classList.toggle('show');
        hamburgerMenu.classList.toggle('active');
    }
}


window.onclick = function(event) {
    if (!event.target.matches('.hamburger-icon') && 
        !event.target.matches('.hamburger-menu')) {
        const dropdownMenu = document.getElementById('dropdownMenu');
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        if (dropdownMenu && dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
            if (hamburgerMenu) {
                hamburgerMenu.classList.remove('active');
            }
        }
    }
};