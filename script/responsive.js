// Evento que faz a troca dos personagens
document.addEventListener('DOMContentLoaded', function() {

    var stream = document.querySelector('.fighter__stream');
    var items = document.querySelectorAll('.fighter__item');

    var sliderBackground = document.getElementById('backg-responsive');
    var image = ['bg-ryu.jpg', 'bg-ken.jpg', 'bg-cloud.jpg', 'bg-corrin.jpg', 'bg-bay.jpg', 'bg-richter.jpg'];

    var i = 2;

    var prev = document.querySelector('.fighter__prev');
    prev.addEventListener('click', function() {
        if(i >= 1 && i <= image.length) {

            stream.insertBefore(items[items.length - 1], items[0]);
            items = document.querySelectorAll('.fighter__item');
 
            i--;

            //Cloud <- Corrin
            if (i == 2) {
                //Corrin
                var nameCorrin = document.querySelector('.name-corrin');

                nameCorrin.style.left = '-1000px';
                nameCorrin.style.transition = 'all 1s';

                //Cloud
                var nameFighter = document.querySelector('.name-fighter');

                nameFighter.style.left = '0';
                nameFighter.style.transition = 'all 1s';
            }

            return setImg();
        }
    });

    var next = document.querySelector('.fighter__next');
    next.addEventListener('click', function() {
        if(i >= 0 && i <= image.length - 2) {
            stream.appendChild(items[0]);
            items = document.querySelectorAll('.fighter__item');

            i++;

            //Cloud -> Corrin
            if (i == 3) {
                //Cloud
                var nameFighter = document.querySelector('.name-fighter');

                nameFighter.style.left = '-1000px';
                nameFighter.style.transition = 'all 1s';

                //Corrin
                var nameCorrin = document.querySelector('.name-corrin');

                nameCorrin.style.left = '0';
                nameCorrin.style.transition = 'all 1s';
            }

            return setImg();
        }
    });

    function setImg() {
        return sliderBackground.setAttribute('src', 'images/Mobile/background/' + image[i]);
    }
});