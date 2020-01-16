
$('i, fas fa-bars').click(
  function(){
    $('div.hamburger-menu, ul, li').show();
  }
);
$('.close, fas fa-times').click(
  function(){
    $('div.hamburger-menu, ul, li').hide();
  }
);
