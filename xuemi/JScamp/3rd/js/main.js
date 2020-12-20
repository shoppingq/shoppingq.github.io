//menu toggle
function showMenu() {
    let menu = document.querySelector('#menu');
    menu.style.display = 'block';
}

function closeMenu() {
    let menu = document.querySelector('#menu');
    menu.style.display = 'none';
}



$(document).ready(function () {
    // $(".card_img").mouseenter(function () {
    //     $(this).css('opacity', 1);
    // });
    $(".card_img").mouseover(function () {
        $(this).css('opacity', 1);
    });
    $(".card_img").mouseout(function () {
        $(this).css('opacity', 0.5);
    });
    // $(".card_img").mouseleave(function () {
    //     $(this).css('opacity', 0.5);
    // });
  });


//AOS
AOS.init();