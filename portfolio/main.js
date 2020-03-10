$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
     } );
    //  this opens the nav bar 
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    } );
    // this closes the navbar
    /*
    $('.nav a[href*="#"]').on('click', function () {
        $('html, body').animate( Keyframes: {
            scrollTop: $($(this)).attr('href').offset().top - 100
        }, Options:2000);
    } );
    // for smooth scrolling
    $('#up').on('click', function () {
        $('html, body').animate( Keyframes: {
            scrollTop: 0
        }, options:2000);
    });
   
     AOS.init({
         easing: 'ease',
         duration: 1800
     })  





*/
});
    
   
