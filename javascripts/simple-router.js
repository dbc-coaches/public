$(document).ready(function() {
  $('.nav-link').on('click', function(e) {
    // prevent page scroll on clicking link
    e.preventDefault();

    // This grabs the id of the section to show
    var id = $(e.target).closest('a').data('id');

    // Hide the section that is currently showing
    $('.main-content').removeClass('active');

    // Show section that the user is trying to navigate to
    $(id).addClass('active');
  });
});