var htmlWrapper = document.querySelector("body");
var navWrapper = document.querySelector(".navWrapper");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

//
window.onload = function() {
  // document.getElementsByClassName("navWrapper")[0].className += ' firstState ';
}

//
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("bckBtn").style.display = "block";
  } else {
    document.getElementById("bckBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//
htmlWrapper.addEventListener("click", (event) => {
  //console.log(event.target.parentNode.parentNode.parentNode.id == "mainNav");
  if (event.target.tagName == "A") {
    if (event.target.parentNode.parentNode.parentNode.id == "mainNav") {
      toggleMonileMenu(false);
    }
  }
  // if (event.target.id == "menuBtnDiv") {
  //   toggleMonileMenu(true);
  // }
});

document.getElementById('mobBtnDiv').onclick = function() {
  toggleMonileMenu();
}

function toggleMonileMenu() {
  var className = '' + navWrapper.className + '';

  if (~className.indexOf(' inactive ')) {
    navWrapper.className = className.replace(' inactive', ' active');
    // if (scroll === true) {
    //   scroltoPos(171);
    // }
  } else if (~className.indexOf(' active ')) {
    navWrapper.className = className.replace(' active', ' inactive');
    // if (scroll === true) {
    //   scroltoPos(-171);;
    // }
  } else {
    navWrapper.className += ' active ';
    // if (scroll === true) {
    //   scroltoPos(171);
    // }
  }
}

// function scroltoPos(pos) {
//   window.scrollBy({
//     top: pos,
//     left: 0,
//     behavior: 'smooth'
//   });
// }

// function toggleMonileMenu(show) {
//
//   var mainHeading = document.getElementById("mainHeading");
//
//   if (show !== true) {
//     mainHeading.style.display = "none";
//   } else {
//     mainHeading.style.display = "block";
//   }
// }
