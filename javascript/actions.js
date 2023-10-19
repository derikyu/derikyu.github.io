console.log(sections);

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".content section");
  let currentSectionIndex = 0;

  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  prevButton.addEventListener("click", function () {
      currentSectionIndex = Math.max(0, currentSectionIndex - 1);
      sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
  });

  nextButton.addEventListener("click", function () {
      currentSectionIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
      sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
  });
});

// Accordian effect 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Sticky header 

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("sticky-navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}