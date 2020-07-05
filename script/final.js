// Abrindo e fechando Menu-Lateral e adicionando o overlay no restante da página.
function menuLateral() {
    document.getElementById('menu-lateral').classList.toggle('active');

    document.getElementById('overlay').classList.toggle('active');
}

function closeMenu() {
    var btnClose = document.getElementById('menu-lateral').classList.toggle('active');

    var closeOverlay = document.getElementById('overlay').classList.toggle('active');

    if(btnClose.hasAttribute('active') && closeOverlay.hasAttribute('active')) {
        btnClose.removeAttribute('active');
        closeOverlay.removeAttribute('active');
    }
}

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

            if (i == 2) {
                //Corrin
                var nameCorrin = document.querySelector('.name-corrin');
                var nameMale = document.querySelector('.name-male');
                var numberFighter = document.querySelector('.number-fighter')
                numberFighter.innerHTML = '#61';
                numberFighter.style.left = '670px';
                numberFighter.style.top = '100px';
                numberFighter.style.backgroundImage = 'linear-gradient(93deg, #8d78c0 0%, #fff 100%)';


                nameCorrin.style.left = '-900px';
                nameCorrin.style.transition = 'all 1s';
                nameMale.style.opacity = '0';

                //Cloud
                var nameFighter = document.querySelector('.name-fighter');
                var plusCloud = document.querySelector('.pluss');
                var corMore = document.querySelector('.more');
                var corNFight = document.querySelector('.nfight');
                var nFight = document.querySelector('.n-fight');
                var fasLeft = document.querySelector('.fa-chevron-left');
                var fasRight = document.querySelector('.fa-chevron-right');

                nameFighter.style.left = '0';
                nameFighter.style.transition = 'all 1s';
                plusCloud.style.background = 'linear-gradient(225deg, #8c7abd 0%, #6d5b9c 100%)';
                corMore.style.color = '#8c7abd';
                corNFight.style.color = '#745ea8'
                nFight.style.marginLeft = '70px';
                fasLeft.style.color = '#745ea8';
                fasRight.style.color = '#745ea8';
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
            

                nameFighter.style.left = '-900px';
                nameFighter.style.transition = 'all .7s';
                // quando for montar o projeto do zero, tentar manter o nnúmero do jogador no mesmo lugar, alterando somente o número.
                numberFighter.innerHTML = '#62';
                numberFighter.style.left = '748px';
                numberFighter.style.top = '158px';
                numberFighter.style.backgroundImage = 'linear-gradient(51deg, #e577e1 0%, #ffffff 100%)';

                //Corrin
                var nameCorrin = document.querySelector('.name-corrin');
                var nameMale = document.querySelector('.name-male');
                var plusCorrin = document.querySelector('.pluss');
                var corMore = document.querySelector('.more');
                var corNFight = document.querySelector('.nfight');
                var nFight = document.querySelector('.n-fight');
                var hrCorrin = document.querySelector('.hr');
                var fasLeft = document.querySelector('.fa-chevron-left');
                var fasRight = document.querySelector('.fa-chevron-right');


                nameCorrin.style.left = '3px';
                nameCorrin.style.transition = 'all 1s';
                nameCorrin.style.fontSize = '93px';
                nameMale.style.opacity = '1';
                nameMale.style.top = '412px';
                plusCorrin.style.background = 'linear-gradient(224.76deg, rgba(255, 255, 255, 0.38) -5.62%, #B452AA 105.1%)';
                corMore.style.color = '#EFBDF0';
                corNFight.style.color = '#B957B0'
                nFight.style.marginLeft = '115px';
                hrCorrin.style.border = '1px solid #EFBDF0';
                fasLeft.style.color = '#B957B0';
                fasRight.style.color = '#B957B0';
            }

            return setImg();
        }
    });

    function setImg() {
        return slider_background.setAttribute('src', 'images/background/' + image[i]);
    }

});