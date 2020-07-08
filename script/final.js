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

            //Cloud <- Corrin
            if (i == 2) {
                //Corrin
                var nameCorrin = document.querySelector('.name-corrin');
                var nameMale = document.querySelector('.name-male');
                var numberFighter = document.querySelector('.number-fighter');

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
                var nFightBay = document.querySelector('.nfight-bay');
                var nFightCorrin = document.querySelector('.nfight');

                nameFighter.style.left = '0';
                nameFighter.style.transition = 'all 1s';
                plusCloud.style.background = 'linear-gradient(225deg, #8c7abd 0%, #6d5b9c 100%)';
                corMore.style.color = '#8c7abd';
                corNFight.style.color = '#745ea8'
                nFight.style.marginLeft = '70px';
                fasLeft.style.color = '#745ea8';
                fasRight.style.color = '#745ea8';
                nFightBay.style.display = 'none';
                nFightCorrin.style.display = 'inline';
            }

            //Corrin <- Bayonetta
            if (i == 3) {
                //Bayonetta
                var numberFight = document.querySelector('.number-fighter');
                var nameBay = document.querySelector('.name-bayonetta');

                numberFight.innerHTML = "#62";
                numberFight.style.backgroundImage = 'linear-gradient(224.76deg, rgba(255, 255, 255, 0.38) -5.62%, #B452AA 105.1%)';
                numberFight.style.left = '748px';
                numberFight.style.top = '158px';
                nameBay.style.left = '-1000px';
                nameBay.style.transition = 'all 1s';

                //Corrin
                var nameCorrin = document.querySelector('.name-corrin')
                var nameMale = document.querySelector('.name-male');
                var plusCorrin = document.querySelector('.pluss');
                var corNFight = document.querySelector('.nfight');
                var nFightBay = document.querySelector('.nfight-bay');
                var fasLeft = document.querySelector('.fa-chevron-left');
                var fasRight = document.querySelector('.fa-chevron-right');
                var control = document.querySelector('.control');
                var nFightRich = document.querySelector('.nfight-rich');

                nameCorrin.style.left = '3px';
                nameCorrin.style.transition = 'all 1s';
                nameCorrin.style.fontSize = '93px';
                nameMale.style.opacity = '1';
                nameMale.style.top = '412px';
                plusCorrin.style.background = 'linear-gradient(224.76deg, rgba(255, 255, 255, 0.38) -5.62%, #B452AA 105.1%)';
                corNFight.style.display = 'none';
                nFightBay.style.display = 'inline';
                fasLeft.style.color = '#B957B0';
                fasRight.style.color = '#B957B0';
                control.style.boxShadow = '0 12px 71px #B957B0';
                nFightRich.style.display = 'none';
            }

            // Bayonetta <- Richter
            if (i == 4) {
                //Richter
                var nameRich = document.querySelector('.name-richter');

                nameRich.style.left = '-1000px';
                nameRich.style.transition = 'all 1s';

                //Bayonetta
                var numberFight = document.querySelector('.number-fighter');
                var nameBay = document.querySelector('.name-bayonetta');
                var pluss = document.querySelector('.pluss');
                var fasLeft = document.querySelector('.fa-chevron-left');
                var fasRight = document.querySelector('.fa-chevron-right');
                var control = document.querySelector('.control');
                var nFightRich = document.querySelector('.nfight-rich');
                var nFightRyu = document.querySelector('.nfight-ryu');

                numberFight.innerHTML = '#63';
                numberFight.style.backgroundImage = 'linear-gradient(224.76deg, #FFFBFB -5.62%, #010125 105.1%)';
                numberFight.style.top = '63px';
                numberFight.style.left = '957px';
                nameBay.style.left = '3px';
                nameBay.style.fontSize = '93px';
                nameBay.style.transition = 'all 1s';
                nameBay.style.top = '237px';
                pluss.style.backgroundImage = 'linear-gradient(224.76deg, #FFFBFB -5.62%, #010125 105.1%)';
                control.style.boxShadow = '0 12px 71px #010125';
                fasLeft.style.color = '#010125';
                fasRight.style.color = '#010125';
                nFightRich.style.display = 'inline';
                nFightRyu.style.display = 'none';
            }
            console.log(i)
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

            //Cloud -> Corrin
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

                //Corrin
                var nameCorrin = document.querySelector('.name-corrin');
                var nameMale = document.querySelector('.name-male');
                var plusCorrin = document.querySelector('.pluss');
                var corMore = document.querySelector('.more');
                var corNFight = document.querySelector('.nfight');
                var nFight = document.querySelector('.n-fight');
                var nFightBay = document.querySelector('.nfight-bay');
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
                corNFight.style.display = 'none';
                nFight.style.marginLeft = '115px';
                nFightBay.style.display = 'inline';
                nFightBay.style.color = '#B957B0';
                hrCorrin.style.border = '1px solid #EFBDF0';
                fasLeft.style.color = '#B957B0';
                fasRight.style.color = '#B957B0';
            }

            //Corrin -> Bayonetta
            if (i == 4) {
                //Corrin
                var nameCorrin = document.querySelector('.name-corrin');
                var nameMale = document.querySelector('.name-male');
                var descriptionUm = document.querySelector('.smashBros');
                

                nameCorrin.style.left = '-1000px';
                nameCorrin.style.transition = 'all 1s';
                nameMale.style.opacity = '0';
                descriptionUm.style.top = '280px';
                

                //Bayonetta
                var numberFight = document.querySelector('.number-fighter');
                var nameBay = document.querySelector('.name-bayonetta');
                var pluss = document.querySelector('.pluss');
                var nFightCorrin = document.querySelector('.nfight');
                var nFightBay = document.querySelector('.nfight-bay');
                var nFightRich = document.querySelector('.nfight-rich');
                var fasLeft = document.querySelector('.fa-chevron-left');
                var fasRight = document.querySelector('.fa-chevron-right');
                var control = document.querySelector('.control');

                numberFight.innerHTML = '#63';
                numberFight.style.backgroundImage = 'linear-gradient(224.76deg, #FFFBFB -5.62%, #010125 105.1%)';
                numberFight.style.top = '63px';
                numberFight.style.left = '957px';
                nameBay.style.left = '3px';
                nameBay.style.fontSize = '93px';
                nameBay.style.transition = 'all 1s';
                nameBay.style.top = '237px';
                pluss.style.backgroundImage = 'linear-gradient(224.76deg, #FFFBFB -5.62%, #010125 105.1%)';
                nFightCorrin.style.display = 'none';
                nFightBay.style.display = 'none';
                nFightRich.style.display = 'inline';
                nFightRich.style.color = '#010125';
                control.style.boxShadow = '0 12px 71px #010125';
                fasLeft.style.color = '#010125';
                fasRight.style.color = '#010125';
                
            }

            //Bayonetta -> Richter
            if(i == 5) {
                //Bayonetta
                var nameBay = document.querySelector('.name-bayonetta');

                nameBay.style.left = '-1000px';
                nameBay.style.transition = 'all 1s';


                //Richter
                var nameRich = document.querySelector('.name-richter');
                var numberFight = document.querySelector('.number-fighter');
                var pluss = document.querySelector('.pluss');
                var nFightRich = document.querySelector('.nfight-rich'); 
                var nFightRyu = document.querySelector('.nfight-ryu');
                var fasLeft = document.querySelector('.fa-chevron-left');
                var fasRight = document.querySelector('.fa-chevron-right');
                var control = document.querySelector('.control');

                nameRich.style.left = '1px';
                nameRich.style.transition = 'all 1s';
                nameRich.style.fontSize = '112px';
                nameRich.style.top = '226px';
                numberFight.innerHTML = '#66';
                numberFight.style.top = '156px';
                numberFight.style.left = '789px';
                numberFight.style.backgroundImage = 'linear-gradient(224.76deg, rgb(255, 255, 255) -5.62%, #698d9a 105.1%)';
                pluss.style.backgroundImage = 'linear-gradient(224.76deg, rgb(255, 255, 255) -5.62%, #698d9a 105.1%)';
                nFightRich.style.display = 'none';
                nFightRyu.style.display = 'inline';
                nFightRyu.style.color = '#698d9a';
                fasLeft.style.color = '#698d9a';
                fasRight.style.color = '#698d9a';
                control.style.boxShadow = '0 12px 71px #698d9a';
            }
            console.log(i)
            return setImg();
        }
    });

    function setImg() {
        return slider_background.setAttribute('src', 'images/background/' + image[i]);
    }

});