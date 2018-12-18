const toTopBtn = document.querySelector(".toTopBtn");

function onScroll() {
  if (toTopBtn != null) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      toTopBtn.classList.add('toTopBtn--active');
      toTopBtn.dataset.active = true;
    } else {
      toTopBtn.classList.remove('toTopBtn--active');
      toTopBtn.dataset.active = false;
    }
  }
}

if (toTopBtn != null) {
  toTopBtn.addEventListener('click', function () {
    // For Safari
    document.body.scrollTop = 0;
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop = 0;
  });
}

document.addEventListener('scroll', onScroll, {
  passive: true
});