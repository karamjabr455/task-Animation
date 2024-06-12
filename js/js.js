
// Animation of icons and their downloading when making a scroll
window.addEventListener('load', function() {
    setTimeout(function() {
        var techStack = document.querySelector('.tech-stack');
        var halfCircleImages = document.querySelector('.half-circle-images');
        var stackItems = document.querySelector('.stack-items');

        var images = halfCircleImages.querySelectorAll('img');

        images.forEach(function(img) {
            var stackItem = document.createElement('div');
            stackItem.classList.add('stack-item');
            stackItem.appendChild(img);
            stackItems.appendChild(stackItem);
            stackItem.classList.add('falling');
        });

        techStack.classList.add('active');
    }, 6000); 
});

//Animation when loading the page. When the page is opened, animation elements appear

document.addEventListener("DOMContentLoaded", function() {
    var preloadScreen = document.getElementById("preload-screen");
    var halfCircleImages = document.querySelector(".half-circle-images");
    setTimeout(function() {
        preloadScreen.style.opacity = "0";
        setTimeout(function() {
            preloadScreen.style.display = "none";
            halfCircleImages.classList.remove("hidden");
            showImagesWithAnimation();
        }, 1000); 
    }, 3000); 


    function showImagesWithAnimation() {
        var images = document.querySelectorAll('.half-circle-images img');
        images.forEach(function(image, index) {
            if (index < 3) {
                setTimeout(function() {
                    image.classList.add('show-right');
                }, index * 300);
            } else {
                setTimeout(function() {
                    image.classList.add('show-left');
                }, (index - 3) * 300); 
            }
        });
    }
});
