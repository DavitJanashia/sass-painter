
const $ = require('jquery'); // cosi non bisogna mettere il link del JQUERY nel head del HTML


function init(){
  scrollNavFix ();

}

$(document).ready(init);

function scrollNavFix (){
  var nav = $('.navbar-fixed');

  function fixedNav(){
    if ($(window).scrollTop() > $('header').height()) {
      nav.addClass("fix");
    } else {
      nav.removeClass("fix");
    }
  }
  fixedNav();

  $(window).on('scroll', function () {

    let scrollPX = $(window).scrollTop();
    let winH = $(window).height();
    let headerH = $('header').height();

    if (scrollPX > headerH) {
      nav.addClass("fix");
    } else {
      nav.removeClass("fix");
    }

    console.log(scrollPX, winH);
  });
}
