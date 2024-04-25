window.jQuery = window.$ = jQuery;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(window).on('load', function () {
  console.log('sprouts')

  $('#fullstop').hover(
    function () {
      //$('body').addClass('pickup')
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
    if($('body').hasClass('menuActive')){
      $(this).removeClass('active')
      $('body').removeClass('menuActive')
      $('html').addClass('loaded')
    }else{
      $(this).addClass('active')
      $('body').addClass('menuActive')
      $('html').removeClass('loaded')
    }
  })

  $('body > .menu a').click(function () {
    if ($(this).hasClass('active')) {
      $('.ham').removeClass('active')
      $('body').removeClass('menuActive')
      $('html').addClass('loaded')
    } else {

    }
  })

 

  $('html').addClass('loaded')
  $('body > .menu a[href="' + location.pathname + '"]').addClass('active')
})

