$(function() {


var navigation = $(".navigation");

//------------------burger menu--------------------------------------//
				
$('.navicon').click(function() {
    $('.navicon').toggleClass('blueburger').toggleClass('cross');    
    $('nav').toggleClass('navDark');
    navigation.toggleClass('navToggle');    
});

$('ul li a').click(function() {
    console.log('navtttt');
    $('nav').removeClass('navDark');
    navigation.removeClass('navToggle');
    $('.navicon').addClass('blueburger').removeClass('cross');                       
});

$('.navigation.navToggle li a').click(function() {
    console.log('what is wrong?');
});



//------------------scroll animations--------------------------------------//







   


$(window).scroll(function(){
    var wScroll = $(this).scrollTop(),
    heroSectionBottom = $('.hero-section').height();
    

//animate tagline
    if (wScroll > 100){
        $('.tagline').addClass('gone');
    } else{
        $('.tagline').removeClass('gone');
    }
    // console.log(wScroll);
    // console.log(heroTextHeight);
    // console.log(heroSectionBottom);




// animate header class
    if (wScroll > heroSectionBottom - 110) {
        // console.log('tata');
        $('.headerBg').addClass('moveUp');
        $('.headerContent').addClass('moveUp');
    }else{
        $('.headerBg').removeClass('moveUp');
        $('.headerContent').removeClass('moveUp');
    }














});//end of windows scroll



});//end of windows ready function















