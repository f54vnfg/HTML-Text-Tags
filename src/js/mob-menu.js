(() => {
  const menuBtn = document.querySelector('.menu-btn')
  const mainNav = document.querySelector('.mainNav__container')
  let mobMenuActive = false

  if (menuBtn != null && mainNav != null) {
    menuBtn.addEventListener('click', () => {
      if (mobMenuActive === 'false') {
        mainNav.classList.add('active')
        menuBtn.classList.add('active')
        mobMenuActive = 'true'
      } else {
        mainNav.classList.remove('active')
        menuBtn.classList.remove('active')
        mobMenuActive = 'false'
      }
    })
  }
})()