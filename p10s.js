// Initialize variables
let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let currentSlide = 0;

// Hide all slider images
function hideSliderImages() {
    sliderImages.forEach((image) => {
        image.style.display = "none";
    });
}

// Show current slide
function showSlide(slideIndex) {
    sliderImages[slideIndex].style.display = "block";
}

// Slide to the left
function slideLeft() {
    hideSliderImages();
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = sliderImages.length - 1;
    }
    showSlide(currentSlide);
}

// Slide to the right
function slideRight() {
    hideSliderImages();
    currentSlide++;
    if (currentSlide >= sliderImages.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Left arrow click event
arrowLeft.addEventListener("click", () => {
    slideLeft();
});

// Right arrow click event
arrowRight.addEventListener("click", () => {
    slideRight();
});

// Toggle content visibility
function toggleContent(index) {
    const toggleContentElement = document.getElementById(`toggle-content${index}`);
    const arrowIconUp = document.getElementById(`arrow-icon-up${index}`);
    const arrowIconDown = document.getElementById(`arrow-icon-down${index}`);
    const slider = document.getElementById("slider");

    if (toggleContentElement.classList.contains("hide")) {
        toggleContentElement.classList.remove("hide");
        arrowIconUp.classList.remove("hide");
        arrowIconDown.classList.add("hide");
        slider.classList.remove("hide");
    } else {
        toggleContentElement.classList.add("hide");
        arrowIconUp.classList.add("hide");
        arrowIconDown.classList.remove("hide");
        slider.classList.add("hide");
    }
}

// Register click events for toggling content
function registerToggleContentClickEvents() {
    const toggleParagraphs = document.querySelectorAll(".toggle-paragraph");
    toggleParagraphs.forEach((paragraph) => {
        const index = paragraph.getAttribute("data-toggle-index");
        paragraph.addEventListener("click", () => {
            toggleContent(index);
        });
    });
}

// Start the slider
function startSlider() {
    hideSliderImages();
    showSlide(currentSlide);
}

// Call the startSlider function to initialize the slider
startSlider();

// Register click events for toggling content
registerToggleContentClickEvents();