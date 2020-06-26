var btnPrev = document.getElementById('prev');
var btnNext = document.getElementById('next');

var backG = document.getElementById('backg');
var image = ['background-ryu.jpg', 'background-ken.jpg', 'background-cloud.jpg'];
var i = 0;


btnNext.addEventListener('click', function() {
    if( i>=0 && i<=image.length - 2) {
        i++;

        var fighter = document.getElementById('fight');
        var nextFighter = document.getElementById('nextfighter');

        fighter.style.opacity='0';
        nextFighter.style.right='26%';
        nextFighter.style.width='46%';
        nextFighter.style.height='100%';
        nextFighter.style.top='0';

        backG.setAttribute('src', 'images/background/' + image[i]);

    }
    
});

btnPrev.addEventListener('click', function() {

    if( i>=1 && i<=image.length){
        i--;
        var fighter = document.getElementById('fight');
        var nextFighter = document.getElementById('nextfighter');
    
        fighter.style.opacity='1';
        nextFighter.style.right='-95px';
        nextFighter.style.width='20%';
        nextFighter.style.height='50%';
        nextFighter.style.top='156px';

        backG.setAttribute('src', 'images/background/' + image[i]);
    }
    
});