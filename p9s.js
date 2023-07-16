let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
    reset();
    current--;
    if (current < 0) {
        current = sliderImages.length - 1;
    }
    sliderImages[current].style.display = "block";
}

// Show next
function slideRight() {
    reset();
    current++;
    if (current >= sliderImages.length) {
        current = 0;
    }
    sliderImages[current].style.display = "block";
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
    slideRight();
});

startSlide();



function toggleContent(index) {
    const contentElement = document.getElementById(`toggle-content${index}`);
    const downArrowElement = document.getElementById(`arrow-icon-down${index}`);
    const upArrowElement = document.getElementById(`arrow-icon-up${index}`);

    if (contentElement.classList.contains("hide")) {
        contentElement.classList.remove("hide");
        downArrowElement.classList.add("hide");
        upArrowElement.classList.remove("hide");
        contentElement.style.maxHeight = contentElement.scrollHeight + "px";
    } else {
        contentElement.classList.add("hide");
        downArrowElement.classList.remove("hide");
        upArrowElement.classList.add("hide");
        contentElement.style.maxHeight = null;
    }
}
