$(document).ready(function() {
  var RosterView = {
    _$rosterNodes: $('.roster li'),

    initialize: function() {
      if (this._isOnTeamPage()) { this._render(); }

      $(window).on('hashchange', this._handleHashChange.bind(this));
    },

    _handleHashChange: function() {
      this._isOnTeamPage() ? this._render() : this._remove();
    },

    _isOnTeamPage: function() {
      return window.location.hash === '#team';
    },

    _render: function() {
      this._$rosterNodes.each(this._sexyFade);
    },

    _remove: function() {
      this._$rosterNodes.hide();
    },


    _sexyFade: function(index, el) {
      $(el).fadeIn((index + 1) * 400);
    }
  }

  RosterView.initialize();
})
