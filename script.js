// parallax memberikan effect kecepatan scroll pada element di dalam jumbotron
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $('.isijumbotron').css({
    transform: `translate(0px, ${wScroll / 5}%)`,
  });
  // $('.jumbotron h1').css({
  //   transform: `translate(0px, ${wScroll / 2.5}%)`,
  // });
  // $('.jumbotron p').css({
  //   transform: `translate(0px, ${wScroll / 2.5}%)`,
  // });

  //effect landing element pada project
  if (wScroll > $('.project').offset().top - 480) {
    $('.project .card').addClass('muncul');
  }
  if (wScroll > $('.education').offset().top - 430) {
    $('.education .card.row1').addClass('muncul');
  }
  if (wScroll > $('.education').offset().top - 280) {
    $('.education .card.row2').addClass('muncul');
  }
});

// parallax effect landing element saat halaman di buka/refresh
