// Abrindo e fechando Menu-Lateral e adicionando o overlay no restante da página.
function menuLateral() {
    document.querySelector('.menu-lateral').classList.toggle('active');

    document.getElementById('overlay').classList.toggle('active');
}

function closeMenu() {
    var btnClose = document.querySelector('.menu-lateral').classList.toggle('active');

    var closeOverlay = document.getElementById('overlay').classList.toggle('active');

    if(btnClose.hasAttribute('active') && closeOverlay.hasAttribute('active')) {
        btnClose.removeAttribute('active');
        closeOverlay.removeAttribute('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {

    var stream = document.querySelector('.fighter__stream');
    var items = document.querySelectorAll('.fighter__item');

    var slider_background = document.getElementById('i_backG');
    var image = ['background-ryu.jpg', 'background-ken.jpg', 'background-cloud.jpg', 'background-corrin.jpg', 'background-bay.jpg', 'background-richter.jpg'];
    var i = 2;

    var nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', function() {

        if(i >= 0 && i <= image.length - 2) {

            if (i == 3) {
                //Cloud
                var nameFighter = document.querySelector('.name-fighter');
                var numberFighter = document.querySelector('.number-fighter');

                nameFighter.style.left = '-900px';
                nameFighter.style.transition = 'all .7s';
                numberFighter.innerHTML = '#62';
                numberFighter.style.left = '748px';
                numberFighter.style.top = '158px';
                numberFighter.style.backgroundImage = 'linear-gradient(51deg, #e577e1 0%, #ffffff 100%)';
            }
        }

    });
});