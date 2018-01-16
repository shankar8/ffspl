
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


var heroTextTop = $('#home .hero-text h3').offset().top;
var heroSectionBottom = $('.hero-section').height(),
    serviceUmbrellaTop = $('.service-umbrella').offset().top;

    // console.log(serviceUmbrellaTop);

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if (wScroll > 100){
        $('.tagline').addClass('gone');
    } else{
        $('.tagline').removeClass('gone');
    }
    // console.log(wScroll);
    // console.log(heroTextHeight);
    // console.log(heroSectionBottom);

    if (wScroll > heroSectionBottom - 110) {
        // console.log('tata');
        $('.headerBg').addClass('moveUp');
        $('.headerContent').addClass('moveUp');
    }else{
        $('.headerBg').removeClass('moveUp');
        $('.headerContent').removeClass('moveUp');
    }


// sevice area animation
    if(wScroll > $('.service-area').offset().top - ($(window).height() / 1.2)) {
            
        $('.service-icons').each(function(i){
            setTimeout(function(){
            $('.service-img-box').eq(i).addClass('is-showing');
            }, (700 * (Math.exp(i * 0.14))) - 700);
        });

    }

// client section animation
    // if(wScroll > $('.client-section').offset().top - ($(window).height() / 1.2)) {
        
    // $('.client-box').each(function(i){
    //     setTimeout(function(){
    //     $('.client-box').eq(i).addClass('is-showing');
    //     }, (700 * (Math.exp(i * 0.14))) - 700);
    // });

// }

        
//service umbrella animation

if (wScroll > serviceUmbrellaTop - 400) {
    // console.log('tata');
    $('.cat1').addClass('assemble');
    $('.cat2').addClass('assemble');
    $('.cat3').addClass('assemble');
}else{
    // $('.headerBg').removeClass('moveUp');
    
}


});//end of windows scroll



});















