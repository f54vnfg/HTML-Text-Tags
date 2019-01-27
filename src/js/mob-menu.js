(function () {
  const menu_btn = document.querySelector('.menu-btn');
  const mainNav = document.querySelector('.mainNav__container');
  let mobMenuActive = false;

  if (menu_btn != null & mainNav != null) {
    menu_btn.addEventListener('click', function (e) {

      if (mobMenuActive == "false") {
        mainNav.classList.add('active');
        menu_btn.classList.add('active');
        mobMenuActive = "true";
      } else {
        mainNav.classList.remove('active');
        menu_btn.classList.remove('active');
        mobMenuActive = "false";
      }

    });
  }
})()