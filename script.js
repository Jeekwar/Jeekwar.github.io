// parallax memberikan effect kecepatan scroll pada element di dalam jumbotron
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $('.jumbotron img').css({
    transform: `translate(0px, ${wScroll / 4}%)`,
  });
  $('.jumbotron h1').css({
    transform: `translate(0px, ${wScroll / 2}%)`,
  });
  $('.jumbotron p').css({
    transform: `translate(0px, ${wScroll / 3}%)`,
  });

  //effect landing element pada project
  if (wScroll > $('.project').offset().top - 230) {
    $('.project .card').addClass('muncul');
  }
});
