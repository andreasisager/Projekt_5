let slideIndex = 1;
visBilleder(slideIndex);

function nySlide(n) {
  visBilleder(slideIndex += n);
}

function visBilleder(n) {
  let i;
  let slides = document.getElementsByClassName("produktslideshow");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

//Kode til slideshow har taget inspiration i følgende kilde: https://www.w3schools.com/howto/howto_js_slideshow.asp