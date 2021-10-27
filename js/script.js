$(function(){
  $('.humberger').click(function(){
    $('.header').toggleClass('open');
    $('.mask').fadeToggle(300);
    $('body').toggleClass('noscroll');
  });
  $('.mask').click(function(){
    $('header').removeClass('open');
    $('.mask').fadeOut(300);
    $('body').toggleClass('noscroll');

  });
  $('.nav__link').click(function(){
    $('.header').removeClass('open');
    $('.mask').fadeOut(300);
    $('body').toggleClass('noscroll');
  });

});