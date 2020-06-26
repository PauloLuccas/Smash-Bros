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

function moreDetails() {
    document.getElementById('more-details').classList.toggle('active');
}

function closeMoreDetails() {
    var btnCloseMore = document.getElementById('more-details').classList.toggle('active');

    if(btnCloseMore.hasAttribute('active')) {
        btnCloseMore.removeAttribute('active');
    }
}
