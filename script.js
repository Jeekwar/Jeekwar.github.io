// parallax memberikan effect kecepatan scroll pada element di dalam jumbotron
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $('.jumbotron img').css({
    transform: `translate(0px, ${wScroll / 3}%)`,
  });
  $('.jumbotron h1').css({
    transform: `translate(0px, ${wScroll / 1.5}%)`,
  });
  $('.jumbotron p').css({
    transform: `translate(0px, ${wScroll / 2.5}%)`,
  });

  // effect landing element pada about
  if (wScroll > $('#about').offset().top - 480) {
    $('.aboutme').addClass('muncul');
  }
  if (wScroll > $('#about').offset().top - 400) {
    $('.isiaboutme').addClass('muncul');
  }
  // effect landing pada bigtittle
  if (wScroll > $('.project').offset().top - 600) {
    $('.tittleportfolio').addClass('muncul');
  }
  //effect landing element pada project
  if (wScroll > $('.project').offset().top - 480) {
    $('.project .card').addClass('muncul');
  }

  // effect landing element pada education
  if (wScroll > $('.education').offset().top - 430) {
    $('.education .fonttittle').addClass('muncul');
  }
  if (wScroll > $('.education').offset().top - 430) {
    $('.education .card.row1').addClass('muncul');
  }
  if (wScroll > $('.education').offset().top - 280) {
    $('.education .card.row2').addClass('muncul');
  }
  // effect landing element pada skills
  if (wScroll > $('#skills').offset().top - 550) {
    $('#skills .tittle').addClass('muncul');
  }
  if (wScroll > $('#skills').offset().top - 510) {
    $('#skills .skills1').addClass('muncul');
  }
  if (wScroll > $('#skills').offset().top - 400) {
    $('#skills .skills2').addClass('muncul');
  }
  if (wScroll > $('#skills').offset().top - 300) {
    $('#skills .skills3').addClass('muncul');
  }
});

// effect for link navbar active
// effect landing poge saat halaman dibuka/refresh
$(window).on('load', function () {
  $('.isijumbotron').addClass('muncul');
});
