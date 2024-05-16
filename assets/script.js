function menuShow() {
   let menuMobile = document.querySelector('.mobile-menu');
   if (menuMobile.classlist.contains('open')) {
    menuMobile.classList.remove('open');}
    else {
        menuMobile.classList.add('open');}
}