$(function() {


    var navigation = $(".navigation");

console.log("haha");

//------------------burger menu--------------------------------------//
				
$('.navicon').click(function() {
    $('.navicon').toggleClass('blueburger').toggleClass('cross');
    // headerlogo.toggleClass("whitelogo");
    $('nav').toggleClass('navDark');
    navigation.toggleClass('navToggle');
    //$('li').toggleClass('menuButton');
    
});
//$('.cross').click(function() {
    //$('.navicon').addClass('blueburger').removeClass('cross');                    
//});

$('ul li a').click(function() {
    console.log('navtttt');
    //$('li').removeClass('menuButton');
    $('nav').removeClass('navDark');
    navigation.removeClass('navToggle');
    $('.navicon').addClass('blueburger').removeClass('cross');                       
});

$('.navigation.navToggle li a').click(function() {
    console.log('what is wrong?');
});





});
