/****************************************************************
 * Functions
*************************************************************/

$(document).ready(function() {
  // Add smooth scrolling to the navigation menu links
  $('nav a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });

  // Add sliding transition effect for sections
  $(window).on('scroll', function() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    $('.section').each(function() {
      var offsetTop = $(this).offset().top;

      if (scrollTop + windowHeight > offsetTop + 200) {
        $(this).addClass('active');
      } else
    {
        $(this).removeClass('active');
      }
    });
  });

  // Handle music player functionality
  // Add your own logic for playing music

  // Handle signup button click to show the popup
  $('#signup-btn').on('click', function() {
    $('#signup-popup').fadeIn();
  });
});