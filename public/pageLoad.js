export default function test() {
  $('body').attr('id', window.location.pathname.replace('/', 'page_'))
  $('html').removeClass('preLoad')
    $('.ham').removeClass('active')
    $('body').removeClass('menuActive')
    $('body > .menu a').removeClass('active')
    $('html').addClass('loaded')
    $('body > .menu a[href="' + location.pathname + '"]').addClass('active')
    if($('.button').length){
      $('.button a').click(function (e) {
        e.preventDefault();
        $('html').addClass('preLoad')
        $('.ham').removeClass('active')
        $('body').removeClass('menuActive')
        $('body > .menu a').removeClass('active')
        $('html').removeClass('loaded')
        setTimeout(function(){
          window.location.href = $(e.target).attr('href')
        }, 400)
      })
    }
    if($('.cls-transparent').length){
      $('.cls-transparent').click(function (e) {
        e.preventDefault();
        $('html').addClass('preLoad')
        $('.ham').removeClass('active')
        $('body').removeClass('menuActive')
        $('body > .menu a').removeClass('active')
        $('html').removeClass('loaded')
        setTimeout(function(){
          window.location.href = "/about"
        }, 400)
      })
    }
  }