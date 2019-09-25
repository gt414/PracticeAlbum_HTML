// current image identifier
var currentImage = 1;

// when window Loaded
$(window).on('load', function () {
    // set click event listener for arrow button
    $(document).on('click', '#leftArrow', function (event) {
        arrowDidClicked(false);
    });
    $(document).on('click', '#rightArrow', function (event) {
        arrowDidClicked(true);
    });
    // setup image
    setCurrentImage(currentImage);
    // hide arrow button first
    $('.arrowImg').hide();
    // set animate for mouse event when mouse enter in the image
    $('#imageContainer').mouseenter(function () {
        $('.arrowImg').show();
    });
    $('#imageContainer').mouseleave(function () {
        $('.arrowImg').hide();
    });
});

// when arrow button did click
function arrowDidClicked(isRight) {

    if (isRight) {
        currentImage += 1;
    } else {
        currentImage -= 1;
    }
    if (currentImage > 6) {
        currentImage = 1;
    }
    if (currentImage < 1) {
        currentImage = 6;
    }
    setCurrentImage(currentImage);
}

// change image with identifier
function setCurrentImage(imageID) {
    var imageURL = `image/${currentImage}.jpg`
    $('#image').attr("src", imageURL);
    $('#bgImage').css("background-image", `url(${imageURL})`);
}