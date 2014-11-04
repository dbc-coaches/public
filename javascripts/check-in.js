$(document).ready(function() {
  var database = new Firebase('https://dbc-coaches.firebaseio.com/')
    , checkIns = database.child('checkin')

  checkIns.on('value', checkIn)

  function checkIn(response) {
    var coaches = response.val()
    for (coach in coaches) {
      var email = formatEmail(coaches[coach].email)
      $('.check-ins').append(template(email))
    }
  }

  function template(email) {
    var hashedEmail = MD5(email)
    return '<a href="mailto:' + email +
      '" data-email="' + email + '">' +
      '<img src="http://www.gravatar.com/avatar/' + hashedEmail + '?s=50"></a>'
  }

  function formatEmail(email) {
    return $.trim(String(email).toLowerCase())
  }
})
