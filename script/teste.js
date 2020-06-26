var slider_background = document.getElementById('backg');
var slider_fighter = document.getElementById('fight');
var slider_next = document.getElementById('next-fighter');
var image = ['background-ryu.jpg', 'background-ken.jpg', 'background-cloud.jpg', 'background-corrin.jpg', 'background-bay.jpg', 'background-richter.jpg'];
var i = 0;


function next() {

    if(i >= 0 && i <= image.length - 2) {
        i++;

        return setImg();
    }
}

function prev() {
    if(i >= 1 && i <= image.length) {
        i--;
        
        return setImg();
    }
}


function setImg() {
    return slider_background.setAttribute('src', 'images/background/' + image[i]);
}