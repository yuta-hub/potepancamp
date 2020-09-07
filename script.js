$(function() {
  
  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    } else if (slideIndex == $('.slide').length - 1) {
      $('.next-btn').hide();
    }
  }
  
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    $('.orange').removeClass('orange');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    $('.index-btn').eq(clickedIndex).addClass('orange');
    toggleChangeBtn();
  });
  
  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    var $displayDot = $('.orange');
    var $nextDot = $('.start');
    $displaySlide.removeClass('active');
    $displayDot.removeClass('orange');
    $nextDot.removeClass('start');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
      $nextDot.next().children("div").addClass('orange');
      $nextDot.next().addClass('start');
    } else {
      $displaySlide.prev().addClass('active');
      $nextDot.prev().children("div").addClass('orange');
      $nextDot.prev().addClass('start');
    }
    toggleChangeBtn();
  });
});
