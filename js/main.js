$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.datepicker').datepicker({
    disableWeekends: true,
  });
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();
});

// Scroll Up
$(document).ready(function () {
  const scrollBtn = $('#scroll-up');
  // On window Scrolling
  $(window).scroll(function () {
    $(this).scrollTop() >= 400 ? scrollBtn.fadeIn(500) : scrollBtn.fadeOut(500);
  });
  scrollBtn.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });
});