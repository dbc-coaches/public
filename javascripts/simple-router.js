$(document).ready(function() {
  var Router = {
    initialize: function() {
      this._navigate();
      $(window).on('hashchange', this._navigate);
    },

    _navigate: function() {
      var hash = window.location.hash;

      // Don't do anything if no hash in url
      if (!hash) { return; }

      // Hide the section that is currently showing
      $('.main-content').removeClass('active');

      var $section = $(hash);

      // Show section that has the hash as it's id or redirect to root if section
      // doesn't exist
      $section.length ? $section.addClass('active') : window.location = '/';
    }
  }

  Router.initialize();
});