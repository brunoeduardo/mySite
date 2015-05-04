// show nav menu
function navMenu(){
  var $btnMenu = document.querySelector('.main-menu');
  var $navClose = document.querySelector('.bt-nav-close');
  var $html = document.querySelector('html');

  $btnMenu.addEventListener('click', function(){
    $html.classList.toggle('navMenuShow');
  });

  $navClose.addEventListener('click', function(){
    $html.classList.toggle('navMenuShow');
  });
}

// functions start 
function init(){
  navMenu();
}

init();


