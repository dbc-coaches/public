$(document).ready(function() {
  var FireBase = new Firebase("https://dbc-coaches.firebaseio.com/");
  var quotesRef = FireBase.child("quotes");
  quotesRef.on('value', function (snapshot) {
    showQuote(snapshot.val())
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });

  var showQuote = function(quotes){
    var randomQuoteObject = fetch_random(quotes)

    var randomQuote = randomQuoteObject['feedback']
    var coach = randomQuoteObject['coach']

    var coachesdiv = document.createElement('div')
    var quotesdiv = document.createElement('div')

    var element = document.createElement('p')
    var coachElement = document.createElement('p')

    element.innerHTML = randomQuote
    coachElement.innerHTML = "<p>Students have this to say about: <br><b>" + coach + "</b></p>"

    coachesdiv.innerHTML = coachElement.innerHTML
    quotesdiv.innerHTML =  element.innerHTML


    document.getElementsByClassName('quote')[0].appendChild(coachesdiv)
    document.getElementsByClassName('quote')[0].appendChild(quotesdiv)

  }

  function fetch_random(quotes) {
    var temp_key, keys = [];
    for(temp_key in quotes) {
      if(quotes.hasOwnProperty(temp_key)) {
        keys.push(temp_key);
      }
    }
    return quotes[keys[Math.floor(Math.random() * keys.length)]];
  }
})
