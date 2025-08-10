const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var floatImg = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-images");
var isMouseOver = false; // Flag to track mouse presence

function showFixedImages() {
    fixed.style.display = "block";
    isMouseOver = true;
}

function hideFixedImages() {
    // Delay hiding to check if the mouse is still over the other element
    setTimeout(function() {
        if (!isMouseOver) {
            fixed.style.display = "none";
        }
    }, 1); // Short delay to catch quick mouse movement between elements
}

floatImg.addEventListener("mouseenter", showFixedImages);
fixed.addEventListener("mouseenter", showFixedImages);

floatImg.addEventListener("mouseleave", function() {
    isMouseOver = false;
    hideFixedImages();
});

fixed.addEventListener("mouseleave", function() {
    isMouseOver = false;
    hideFixedImages();
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function(elem) {
    elem.addEventListener("mouseenter", function(){
        var image = elem.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`
    })
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});