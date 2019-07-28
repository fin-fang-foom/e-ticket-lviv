// Responsive Nav
$(function() {
  menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});


/* --------------NAV BUTTON-----------------*/
function smoothScroll(target, time) {
  var margin = ($('#main-header').outerHeight() - 1);
  if (!time) { time = '1000'; }

  if (target === 'toTop') {
    $('html,body').animate({
      scrollTop: 0
    }, time);
  }
  else {
    $('html,body').animate({
      scrollTop: target.offset().top - margin
    }, time);
  }
}

// SCROLL DOWN ARROR BUTTON

  var count = 0;

  $('#scroll').on("click", function(){

    var sections = $('section');

    //+55px to offset the margin-top
    var $this = $(this),
      top = ($this.offset().top - $(window).scrollTop()) + 55,
      right = $this.offset().right;


    $this.css({
      position: 'fixed',
      top: top,
      right: right
    })
    .animate({
      right: '5%',
      top: '90%'
    }, 600)
    .addClass('clicked');

    var target;

    // END OF ARRAY HAS ALEADY BEEN REACHED
    if (count > (sections.length -1) ) { 
      count = -1;
      
      smoothScroll('toTop');
      $this.removeClass('rotate');
    }
    // JUST REACHED END OF ARRAY
    else { 
      target = $(sections[count]);
      if (count === (sections.length -1)) {
        $this.addClass('rotate');
      }
      smoothScroll(target);
    }
  
    count++;

    $(this).find('.arrow-bounce').removeClass('arrow-bounce');

  });



// form
function openForm() {

  document.getElementById("login-page").style.display = "block";
}

function closeForm() {
  document.getElementById("login-page").style.display = "none";
}

$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
