// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

//
window.onload = function() {
  toggleMonileMenu();
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

document.getElementById('dIcon').onclick = function() {

    var className = '' + dIcon.className + ' ';

    if ( ~className.indexOf(' active ') ) {
        this.className = className.replace(' active ', '');
    } else {
        this.className += ' active';
    }

    toggleMonileMenu();
}

function toggleMonileMenu() {
  var visState = document.getElementById("mainNav");
  var mainHeading = document.getElementById("mainHeading");

  if (visState.style.display === "none") {
    visState.style.display = "block";
    mainHeading.style.display = "none";
  } else {
    visState.style.display = "none";
    mainHeading.style.display = "block";
  }

}
