var hamburger = $('.header-right > a');
var hamburger_menu = $('div.hamburger-menu');
hamburger.click(
  function(){
    hamburger_menu.show(1000);
  }
);
$('.close').click(
  function(){
    hamburger_menu.hide(1000);
  }
);
