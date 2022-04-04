const countAllSlideShows = document.querySelectorAll('.slideshow-container').length;
let slideIndex = new Array(countAllSlideShows); for (let i=0; i<countAllSlideShows; ++i) slideIndex[i] = 1;
let slideClass = new Array(countAllSlideShows); for (let i=0; i<countAllSlideShows; ++i) slideClass[i] = "mySlides" + (i+1);

for (i = 0; i < countAllSlideShows; i++) {
  showSlides(1, i);  
}

function plusSlides(n, no) {
  showSlides(slideIndex[no-1] += n, no-1);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideClass[no]);

  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}