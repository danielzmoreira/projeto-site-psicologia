function menuShow() {
   let menuMobile = document.querySelector('.mobile-menu-icon');
   if (menuMobile.classlist.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
   } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
}
}