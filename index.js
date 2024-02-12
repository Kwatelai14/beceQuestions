var accordionHeaders = document.querySelectorAll(".objective-answers");

for (var i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordionContent = this.nextElementSibling;
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.display = "block";
    }
  });
}


function scrollUp() {
  window.scrollUp({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}