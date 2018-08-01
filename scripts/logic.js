var htmlWrapper = document.querySelector("body");
var navWrapper = document.querySelector(".navWrapper");

// On scroll call this function
window.onscroll = function() {
  scrollFunction()
};

// When the user scrolls down 500px, show the button
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("bckBtn").style.display = "block";
  } else {
    document.getElementById("bckBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top
function topFunction() {
  // For Safari
  document.body.scrollTop = 0;
  // For Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
}

// Add click event listener to the html tag
htmlWrapper.addEventListener("click", (event) => {
  // when you click on a tag
  if (event.target.tagName == "A") {
    // are we clicking within the nav id
    if (event.target.parentNode.parentNode.parentNode.id == "mainNav") {
      // toggle mobile menu visability.
      toggleMonileMenu();
    } // check if we are clicking the mobile menu button
  }  else if (event.target.id == "mobBtnDiv" || event.target.id == "menuBtnDiv") {
    // toggle mobile menu visability.
    toggleMonileMenu();
  }
});

// toggle mobile nav menu
function toggleMonileMenu() {
  // variable to hold the classname
  var className = '' + navWrapper.className + '';
  // the rest should be self explanatory
  if (~className.indexOf(' inactive ')) {
    navWrapper.className = className.replace(' inactive', ' active');
    //
  } else if (~className.indexOf(' active ')) {
    navWrapper.className = className.replace(' active', ' inactive');
    //
  } else {
    navWrapper.className += ' active ';
  }
}
