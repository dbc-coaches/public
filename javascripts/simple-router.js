$(document).ready(function() {
  $('.nav-link').on('click', function(e) {
    // This grabs the id of the section to show
    var id = $(e.target).closest('a').data('id');

    // Hide the section that is currently showing
    $('.main-content').removeClass('active');

    // Show section that the user is trying to navigate to
    $(id).addClass('active');

    // Make sure page is scrolled to the top
    setTimeout(function() { $(window).scrollTop(0); }, 0)
  });
});