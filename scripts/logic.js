// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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


var htmlWrapper = document.querySelector("body");

htmlWrapper.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    if (event.target.id == "menuBtnDiv") {
      menuBtnFunc();
    }
  }
});


function menuBtnFunc() {
  var visState = document.getElementById("mainNav");

  if (visState.style.display === "none")
  {
    visState.style.display = "block";
  }
  else {
    visState.style.display = "none";
  }
}
