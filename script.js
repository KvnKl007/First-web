const btns =  document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const intros = document.querySelectorAll(".intro");

let currentSlide = 0;
let slideInterval;
var sliderNav = function(manual){
    // Clear the automatic slide interval

    clearInterval(slideInterval);
    // Remove the "active" class from all elements
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    intros.forEach((intro) => {
        intro.classList.remove("active");
    });
    // Add the "active" class to the selected elements
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    intros[manual].classList.add("active");

    currentSlide = manual;

    setTimeout(startSlider, 5000)
};

// Function to start the automatic slide interval
function startSlider() {
    slideInterval = setTimeout(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        sliderNav(currentSlide);
        startSlider();
    }, 5000);
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
        sliderNav(i)
    });
});

startSlider();
