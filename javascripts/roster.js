$(document).ready(function() {
  $('.roster li').each(sexyFade)

  function sexyFade(index, el) {
    $(el).fadeIn((index + 1) * 400)
  }
})
