document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.fighter__stream');
    var items = document.querySelectorAll('.fighter__item');

    var slider_background = document.getElementById('backg');
    var image = ['background-ryu.jpg', 'background-ken.jpg', 'background-cloud.jpg', 'background-corrin.jpg', 'background-bay.jpg', 'background-richter.jpg'];
    var i = 2;

    
    var prev = document.querySelector('.fighter__prev');
    prev.addEventListener('click', function() {
        if(i >= 1 && i <= image.length) {

            stream.insertBefore(items[items.length - 1], items[0]);
            items = document.querySelectorAll('.fighter__item');

            i--;

            return setImg();
        }
    });

    
    var prevButton = document.querySelector('.prev');
    prevButton.addEventListener('click', function() {
        
        if(i >= 1 && i <= image.length) {

            stream.insertBefore(items[items.length - 1], items[0]);
            items = document.querySelectorAll('.fighter__item');

            i--;
            
            return setImg();
        }
    });
    
    var next = document.querySelector('.fighter__next');
    next.addEventListener('click', function() {
        if(i >= 0 && i <= image.length - 2) {
            stream.appendChild(items[0]);
            items = document.querySelectorAll('.fighter__item');

            i++;

            return setImg();
        }
    });

    var nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', function() {

        if(i >= 0 && i <= image.length - 2) {

            stream.appendChild(items[0]);
            items = document.querySelectorAll('.fighter__item');

            i++;
    
            return setImg();
        }
    });

    function setImg() {
        return slider_background.setAttribute('src', 'images/background/' + image[i]);
    }
    

});