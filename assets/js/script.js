$(document).ready(function () {

    $(".hamburger").on("click", function () {                    //trigger per lo slider
        $(".menu").toggleClass("menu--open");
    });

});

ScrollReveal().reveal('.reveal',{ distance: '90px', duration: 1700, easing: 'cubic-bezier(.215, .61, .355, 1)',interval: 600 });   //animazioni

ScrollReveal().reveal('.zoom',{ duration: 1700, easing: 'cubic-bezier(.215, .61, .355, 1)', interval: 200, scale: 0.65, mobile: false }); //animazioni