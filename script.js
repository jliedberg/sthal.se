// below: fading fullbackground slideshow
(function($) {
  $.fn.script = function(options) {
    var settings = $.extend({
      current: 0,
      images: [],
      transitionTime: 1000,
      wait: 3000,
      static: false
    }, options);

    var i, end;
    for (i = 0, end = settings.images.length; i < end; ++i) {
        new Image().src = settings.images[i];
    }

    $('.fullBackground')
      .css('background-image', 'url(' + settings.images[settings.current] + ')')
      .css('-webkit-transition', + settings.transitionTime + 's ease-in-out')
      .css('-moz-transition', + settings.transitionTime + 'ms ease-in-out')
      .css('-ms-transition', + settings.transitionTime + 'ms ease-in-out')
      .css('-o-transition', + settings.transitionTime + 'ms ease-in-out')
      .css('transition', + settings.transitionTime + 'ms ease-in-out')

    if (settings.static) {
      $(this)
      .css('background-image', 'url(' + settings.images[settings.current] + ')');
      return;
    }

    (function update() {
      settings.current = (settings.current + 1) % settings.images.length;
        $('.fullBackground').css('background-image', 'url(' + settings.images[settings.current] + ')');
        setTimeout(update, settings.wait);
    }());
}}(jQuery));



// below: full background slideshow auto play
$(function () {
$(document).on('scroll', function () {
console.log('scroll top : ' + $(window).scrollTop());
if ($(window).scrollTop() >= $(".fullBackground").height()) {
  $("#nav").addClass("navbar-fixed-top");
}
if ($(window).scrollTop() < $(".fullBackground").height()) {
  $("#nav").removeClass("navbar-fixed-top");
}
});
});



// below: navigation bar, sticky header after scroll
$(document).ready(function(){
  $(window).bind('scroll', function() {
  var navHeight = $( window ).height() - 0;
    if ($(window).scrollTop() > navHeight) {
      $('nav').addClass('fixed');
    }
    else {
      $('nav').removeClass('fixed');
    }
 });
});
