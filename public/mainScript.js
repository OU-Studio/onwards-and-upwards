window.jQuery = window.$ = jQuery;

$(window).on('load', function () {
  console.log('sprouts')

  $('#fullstop').hover(
    function () {
      $('body').addClass('pickup')
    },
    function () {

    }
  );

  $(document)
    .mousemove(function (e) {
      $('#cursor')
        .eq(0)
        .css({
          left: e.pageX,
          top: e.pageY
        });
    })

  $('.ham').click(function () {
    $(this).toggleClass('active')
    $('body').toggleClass('menuActive')
  })
})