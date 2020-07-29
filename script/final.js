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


// Evento que faz a troca dos personagens
document.addEventListener('DOMContentLoaded', function() {

    var stream = document.querySelector('.fighter__stream');
    var items = document.querySelectorAll('.fighter__item');

    var slider_background = document.getElementById('backg');
    var image = ['background-ryu.jpg', 'background-ken.jpg', 'background-cloud.jpg', 'background-corrin.jpg', 'background-bay.jpg', 'background-richter.jpg'];
    var i = 2;


    
    var prevButton = document.querySelector('.prev');
    prevButton.addEventListener('click', function() {
        
        if(i >= 1 && i <= image.length) {

            stream.insertBefore(items[items.length - 1], items[0]);
            items = document.querySelectorAll('.fighter__item');

            i--;

            //Ryu <- Ken
            if (i == 0) {
                //Ken
                var nameKen = document.querySelector('.name-ken');var Fighter = document.querySelector('.bg-2');

                Fighter.style.marginLeft = '0';
                nameKen.style.left = '-1000px';
                nameKen.style.transition = 'all 1s';

                //Ryu
                var nameRyu = document.querySelector('.name-ryu');
                var numberFighter = document.querySelector('.number-fighter');
                var plusRyu = document.querySelector('.pluss');
                var corMore = document.querySelector('.more');
                var corNFight = document.querySelector('.nfight');
                var nFight = document.querySelector('.n-fight');
                var fasLeft = document.querySelector('.fa-chevron-left');
                var fasRight = document.querySelector('.fa-chevron-right');
                var nFightCloud = document.querySelector('.nfight-cloud');
                var nFightKen = document.querySelector('.nfight-ken');

                nameRyu.style.left = '2px';
                nameRyu.style.transition = 'all 1s';
                nameRyu.style.fontSize = '93px';
                numberFighter.style.backgroundImage = 'linear-gradient(225deg, #EDEBF4 0%, #C6C6C6 100%)';
                numberFighter.style.left = '805px';
                numberFighter.style.top = '97px';
                plusRyu.style.background = 'linear-gradient(224.76deg, #BEBDBF -5.62%, #A4A4A4 105.1%)';
                corNFight.style.color = '#C6C6C6'
                nFight.style.marginLeft = '100px';
                fasLeft.style.color = '#C6C6C6';
                fasRight.style.color = '#C6C6C6';
                nFightCloud.style.display = 'none';
                nFightKen.style.display = 'inline';
            }

            //Ken <- Cloud
            if (i == 1) {
                //Cloud
                var nameCloud = document.querySelector('.name-fighter');
                var numberFighter = document.querySelector('.number-fighter');
                
                nameCloud.style.left = '-1000px';
                nameCloud.style.transition = 'all 1s';
                numberFighter.innerHTML = '#60';
                numberFighter.style.backgroundImage = 'linear-gradient(225deg, #FFFBFB 0%, #FC8888 100%)';
                numberFighter.style.left = '740px';
                numberFighter.style.width = 'max-content'; 
                //Ken
                var nameKen = document.querySelector('.name-ken');
                var plusKen = document.querySelector('.pluss');
                var corMore = document.querySelector('.more');
                var corNFight = document.querySelector('.nfight');
                var nFight = document.querySelector('.n-fight');
                var fasLeft = document.querySelector('.fa-chevron-left');
                var fasRight = document.querySelector('.fa-chevron-right');
                var nFightCorrin = document.querySelector('.nfight');
                var nFightCloud = document.querySelector('.nfight-cloud');
                var control = document.querySelector('.control');
                var Fighter = document.querySelector('.bg-2');

                Fighter.style.marginLeft = '-11%';
                nameKen.style.left = '2px';
                nameKen.style.transition = 'all 1s';
                nameKen.style.fontSize = '93px';
                plusKen.style.background = 'linear-gradient(224.76deg, #BE5151 -5.62%, #715959 105.1%)';
                corMore.style.color = '#FFFBFB';
                corNFight.style.color = '#715959'
                nFight.style.marginLeft = '149px';
                fasLeft.style.color = '#715959';
                fasRight.style.color = '#715959';
                nFightCorrin.style.display = 'none';
                nFightCloud.style.display = 'inline';
                control.style.boxShadow = '0 12px 71px #715959';
            }

            //Cloud <- Corrin
            if (i == 2) {
                //Corrin
                var nameCorrin = document.querySelector('.name-corrin');
                var nameMale = document.querySelector('.name-male');
                var numberFighter = document.querySelector('.number-fighter');

                numberFighter.innerHTML = '#61';
                numberFighter.style.left = '716px';
                numberFighter.style.top = '109px';
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
                var descriptionUm = document.querySelector('.smashBros');

                descriptionUm.style.top = '184px';
                nameFighter.style.left = '175px';
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
                numberFight.style.left = '753px';
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
            
            return setImg();
        }
    });

    var prev = document.querySelector('.fighter__prev');
    prev.addEventListener('click', function() {
        if(i >= 1 && i <= image.length) {

            stream.insertBefore(items[items.length - 1], items[0]);
            items = document.querySelectorAll('.fighter__item');
 
            i--;

            // Cloud <- Corrin
            if( i == 2) {
                // Corrin
                var mobileCorrin = document.querySelector('.mobileCorrin');

                mobileCorrin.style.opacity = '0';
                mobileCorrin.style.transition = 'all 1s';

                // Cloud
                var mobileCloud = document.querySelector('.mobileCloud');

                mobileCloud.style.opacity = '1';
                mobileCloud.style.transition = 'all 1s';
            }
            
            // Corrin <- Bayonetta
            if ( i == 3) {
                // Bayonetta
                var mobileBay = document.querySelector('.mobileBay');

                mobileBay.style.opacity = '0';
                mobileBay.style.transition = 'all 1s';

                // Corrin
                var mobileCorrin = document.querySelector('.mobileCorrin');

                mobileCorrin.style.opacity = '1';
                mobileCorrin.style.transition = 'all 1s';
            }

            // Bayonetta <- Richter
                if(i == 4 ) {
                    // Richter
                    var mobileRichter = document.querySelector('.mobileRichter');

                    mobileRichter.style.opacity = '0';
                    mobileRichter.style.transition = 'all 1s';

                    // Bayonetta
                    var mobileBay = document.querySelector('.mobileBay');

                    mobileBay.style.opacity = '1';
                    mobileBay.style.transition = 'all 1s';
                }

            return setImg();
        }
    });

    var nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', function() {

        if(i >= 0 && i <= image.length - 2) {

            stream.appendChild(items[0]);
            items = document.querySelectorAll('.fighter__item');

            i++;

            //Ryu -> Ken
            if (i == 1) {
                //Ryu
                var nameRyu = document.querySelector('.name-ryu');
                var numberFighter = document.querySelector('.number-fighter');

                nameRyu.style.left = '-1000px';
                nameRyu.style.transition = 'all 1s';
                numberFighter.style.backgroundImage = 'linear-gradient(225deg, #FFFBFB 0%, #FC8888 100%)';

                //Ken
                var nameKen = document.querySelector('.name-ken');
                var Fighter = document.querySelector('.bg-2');
                var plusKen = document.querySelector('.pluss');
                var fasLeft = document.querySelector('.fa-chevron-left');
                var fasRight = document.querySelector('.fa-chevron-right');
                var nFightKen = document.querySelector('.nfight-ken');
                var nFightCloud = document.querySelector('.nfight-cloud');
                var control = document.querySelector('.control');
                
                nameKen.style.left = '2px';
                nameKen.style.transition = 'all 1s';
                Fighter.style.marginLeft = '-11%';
                plusKen.style.background = 'linear-gradient(224.76deg, #BE5151 -5.62%, #715959 105.1%)';
                fasLeft.style.color = '#715959';
                fasRight.style.color = '#715959';
                nFightKen.style.display = 'none';
                nFightCloud.style.display = 'inline';
                nFightCloud.style.marginLeft = '55px';
                control.style.boxShadow = '0 12px 71px #715959';
            }   


            //Ken -> Cloud
            if (i == 2) {
                //Ken
                var nameKen = document.querySelector('.name-ken');
                var numberFighter = document.querySelector('.number-fighter');

                nameKen.style.left = '-1000px';
                nameKen.style.transition = 'all 1s';
                numberFighter.innerHTML = '#61';
                numberFighter.style.backgroundImage = 'linear-gradient(93deg, rgb(141, 120, 192) 0%, #fff 100%)';
                numberFighter.style.left = '715px';

                //Cloud
                var nameCloud = document.querySelector('.name-fighter');
                var plusCloud = document.querySelector('.pluss');
                var corNFight = document.querySelector('.nfight');
                var nFight = document.querySelector('.n-fight');
                var fasLeft = document.querySelector('.fa-chevron-left');
                var fasRight = document.querySelector('.fa-chevron-right');
                var nFightCloud = document.querySelector('.nfight-cloud');
                var nFightCorrin = document.querySelector('.nfight');

                nameCloud.style.left = '175px';
                nameCloud.style.transition = 'all 1s';
                plusCloud.style.backgroundImage = 'linear-gradient(225deg, #8c7abd 0%, #6d5b9c 100%)';
                corNFight.style.color = '#8d78c0';
                nFight.style.marginLeft = '70px';
                nFight.style.color = '#8d78c00';
                fasLeft.style.color = '#8d78c0';
                fasRight.style.color = '#8d78c0';
                nFightCloud.style.display = 'none';
                nFightCorrin.style.display = 'inline';
            }

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
                var descriptionUm = document.querySelector('.smashBros');

                descriptionUm.style.top = '280px';
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
                numberFighter.style.width = 'max-content';


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
                var descriptionUm = document.querySelector('.smashBros');

                descriptionUm.style.top = '280px';
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

            return setImg();
        }
    });

    var next = document.querySelector('.fighter__next');
    next.addEventListener('click', function() {
        if(i >= 0 && i <= image.length - 2) {
            stream.appendChild(items[0]);
            items = document.querySelectorAll('.fighter__item');

            i++;

            // Cloud -> Corrin
            if(i == 3) {
                // Cloud
                
                var mobileCloud = document.querySelector('.mobileCloud');

                mobileCloud.style.opacity = '0';
                mobileCloud.style.transition = 'all 1s';

                // Corrin
                var mobileCorrin = document.querySelector('.mobileCorrin');
                var fighter = document.querySelector('.fighter__item:nth-child(3)');

                mobileCorrin.style.opacity = '1';
                mobileCorrin.style.transition = 'all 1s';
                mobileCorrin.style.position = 'absolute';
                mobileCorrin.style.top = '248px';
                mobileCorrin.style.width = '99%';
                fighter.style.left = '60%';
                fighter.style.top = '-9%';
                fighter.style.width = '140%';
            }

            // Corrin -> Bayonetta
            if(i == 4) {
                // Corrin
                var mobileCorrin = document.querySelector('.mobileCorrin');

                mobileCorrin.style.opacity = '0';
                mobileCorrin.style.transition = 'all 1s';

                // Bayonetta
                var mobileBay = document.querySelector('.mobileBay');
                var fighter = document.querySelector('.fighter__item:nth-child(3)')

                mobileBay.style.opacity = '1';
                mobileBay.style.transition = 'all 1s';
                mobileBay.style.position = 'absolute';
                mobileBay.style.top = '248px';
                mobileBay.style.width = '99%';
                fighter.style.left = '57%';
                fighter.style.top = '-9%';
                fighter.style.width = '140%';
            }

            // Bayonetta -> Richter
                if (i == 5) {
                    // Bayonetta
                    var mobileBay = document.querySelector('.mobileBay');

                    mobileBay.style.opacity = '0';
                    mobileBay.style.transition = 'all 1s';

                    // Richter
                    var mobileRichter = document.querySelector('.mobileRichter');
                    var fighter = document.querySelector('.fighter__item:nth-child(3)')

                    mobileRichter.style.opacity = '1';
                    mobileRichter.style.transition = 'all 1s';
                    mobileRichter.style.position = 'absolute';
                    mobileRichter.style.top = '248px';
                    mobileRichter.style.width = '99%';
                    fighter.style.left = '57%';
                    fighter.style.top = '-9%';
                    fighter.style.width = '140%';
                }

            return setImg();
        }
    });


    function setImg() {
        return slider_background.setAttribute('src', 'images/background/' + image[i]);
    }

});