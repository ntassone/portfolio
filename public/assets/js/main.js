/*jshint browser:true */
/*global $*/

$(function() {
  'use strict';
	
  //Headroom
	var header = document.querySelector(".main-nav");
  var headroom  = new Headroom(header, {
    onTop : function() {
      $('body').addClass('headroom--top');
    },
    onNotTop : function() {
      $('body').removeClass('headroom--top');
    },
    offset : 180
  });
  headroom.init();

  //Smooth Scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 150);
        return false;
      }
    }
  });
  
});
