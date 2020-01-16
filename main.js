
$('i, fas fa-bars').click(
  function(){
    $('div.hamburger-menu, ul, li').show(1000);
  }
);
$('.close, fas fa-times').click(
  function(){
    $('div.hamburger-menu, ul, li').hide();
  }
);
