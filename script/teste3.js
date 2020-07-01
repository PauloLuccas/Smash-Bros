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

            if (i == 3) {
                //Cloud
                var nameFighter = document.querySelector('.name-fighter');
                var numberFighter = document.querySelector('.number-fighter');

                //Corrin
                var nameCorrin = document.querySelector('.name-corrin');
                var nameMale = document.querySelector('.name-male');

                nameFighter.style.left = '-900px';
                nameFighter.style.transition = 'all .7s';

                // quando for montar o projeto do zero, tentar manter o nnúmero do jogador no mesmo lugar, alterando somente o número.
                numberFighter.innerHTML = '#62';
                numberFighter.style.left = '732px';
                numberFighter.style.top = '94px';
                numberFighter.style.backgroundImage = 'linear-gradient(51deg, #e577e1 0%, #ffffff 100%)';

                nameCorrin.style.left = '123px';
                nameCorrin.style.transition = 'all 1s';
                nameMale.style.opacity = '1';
            }

            return setImg();
        }
    });

    function setImg() {
        return slider_background.setAttribute('src', 'images/background/' + image[i]);
    }



    

});