import './loader.js'

console.log('please')
console.log($('body'))

$('.ham').click(function () {
    $(this).toggleClass('active')
})
