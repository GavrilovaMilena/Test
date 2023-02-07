$('.reserve').click(function() {
    let popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).removeClass('show');
    $(popup_id).addClass('show');
    $('.popup-overlay').addClass('show');
})
$('.popup-close').click(function() {
    $('.popup-overlay, .popup-window').removeClass('show');
})