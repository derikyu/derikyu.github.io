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
