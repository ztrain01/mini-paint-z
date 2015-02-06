$(document).ready(function() {
  $('#reset').on('click', function() {
    $('.box').removeClass('white');
  })
    $('.box').on('click', function() {
      $(this).addClass('white');
  })
    $('.box').on('dblclick', function() {
      $(this).removeClass('white');
  })
    
    
})