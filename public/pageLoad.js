export default function test() {
    $('.ham').removeClass('active')
    $('body').removeClass('menuActive')
    $('body > .menu a').removeClass('active')
    $('html').addClass('loaded')
    $('body > .menu a[href="' + location.pathname + '"]').addClass('active')
  }