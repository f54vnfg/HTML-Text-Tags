const menu_btn = document.querySelector('.menu-btn');
const mainNav = document.querySelector('.mainNav__wrap');

if (menu_btn != null & mainNav != null) {
  menu_btn.addEventListener('click', function (e) {

    menu_btn.classList.toggle('active');

    if (mainNav.dataset.active == "false") {
      mainNav.classList.add('mainNav__wrap--active');
      mainNav.dataset.active = "true";
    } else {
      mainNav.classList.remove('mainNav__wrap--active');
      mainNav.dataset.active = "false";
    }

  });
}